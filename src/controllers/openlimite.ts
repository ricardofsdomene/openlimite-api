import e, { Request, Response } from "express";

import users from "../utils/mock_certo_dessavez_vai.json";

let renda = 5000; // renda inputada
let saldo = 0; // saldo somado de todas as contas correntes do usuario

users.accountBalance.map((balance, i) => {
  saldo = saldo + balance.availableAmount;
}); // loop iterando e somando todos os saldos de conta corrente daquele user

let gastos = users.cardBill[0][0].billTotalAmount; // ultima fatura de cartão de credito do usuario

function comprometimento_de_renda(gastos: number, renda: number) {
  var cmprom = gastos / renda;
  if (cmprom >= 1) {
    cmprom = 0.001;
  } else if (cmprom >= 0.7 && cmprom < 1) {
    cmprom = 0.3;
  } else if (cmprom >= 0.5 && cmprom < 0.7) {
    cmprom = 0.5;
  } else if (cmprom >= 0.3 && cmprom < 0.5) {
    cmprom = 0.7;
  } else if (cmprom <= 0) {
    cmprom = 0.999;
  }
  return cmprom;
}

// OPTAMOS EM FAZER ESSE DEPLOY INICIAL SEMOS MUITO CONSERVADORES
// PODEM TESTAR DIFERENTES SALDOS E DIFERENTES RENDAS

function capacidade_de_pagamento(renda: number, saldo: number, gastos: number) {
  var capacPgto = (renda + saldo + gastos) / renda;
  if (capacPgto >= 1) {
    capacPgto = 1;
  } else if (capacPgto <= 0) {
    capacPgto = 0.001;
  }
  return capacPgto;
}

function valor_analise(cmprom: number, capacPgto: number, renda: number) {
  var scoreFinal = cmprom * capacPgto;
  var valLimite = renda;
  if (scoreFinal >= 0.4) {
    if (scoreFinal >= 0.8) {
      valLimite = renda * 0.7;
    } else if (scoreFinal >= 0.6 && cmprom < 0.8) {
      valLimite = renda * 0.7;
    } else if (scoreFinal >= 0.4 && cmprom < 0.6) {
      valLimite = renda * 0.4;
    }
    return valLimite;
  }
  return 0;
}

export async function activate(req: Request, res: Response) {
  try {
    const comprometimento = comprometimento_de_renda(gastos, renda);
    const capacidade = capacidade_de_pagamento(renda, saldo, gastos);
    const output: number = valor_analise(comprometimento, capacidade, renda);

    if (output === 0) {
      return res.json({
        error: true,
        value: 0,
        message:
          "Infelizmente o OpenLimite não foi capaz de processar o seu limite.",
      });
    } else {
      return res.json({
        success: true,
        value: output,
        message:
          "Infelizmente o OpenLimite não foi capaz de processar o seu limite.",
      });
    }
  } catch (e: any) {
    console.error(`error::${e}`);
  }
}
