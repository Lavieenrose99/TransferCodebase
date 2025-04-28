import React from 'react';
import jsPDF from 'jspdf';
// import "./SourceHanSansCN-Medium-bold "
import "./SourceHanSansCN-Normal-normal "

function App() {

  const generatePdf = () => {
    const doc = new jsPDF({
      orientation: "p",
      unit: "pt",
      format: "a4",
    })
    // doc.addFileToVFS('SourceHanSansHK-Normal-normal.ttf', font);
    // doc.addFont('SourceHanSansHK-Normal-normal.ttf', 'SourceHanSansHK-Normal', 'normal');
    // doc.text("test data", 24, 24);
    // doc.text("测试数据", 24, 24 * 2);
    // const text = "本人/我們必須向有關轉戶代理人/交易對手作出指示以完成交付產品的程序。本人/我們並同意如該指令不能在提交本指令到銀行後10個工作日内與上述轉戶代理人/交易對手確認，本人/我們的指令將被自動取消";
    // const textLine = doc.setFontSize(8).splitTextToSize(text, 245.5);
    // doc.text(textLine, 24, 24 * 3, { align: "justify", lineHeightFactor: 14 / 8 })
    doc.setFontSize(8).setFont("SourceHanSansCN-Normal", "normal")
    // const text2_e = "I/We must give instruction to the Transfer Agent/ Counterparty for product to be delivered / received. I/We understand that my/our transfer instruction will be automatically cancelled if my/our instruction cannot be confirmed with the above Transfer Agent/Counterparty within 10 business days after submission of this instruction to the Bank."
    // const text_e1 = "I/We must give instruction to the Transfer Agent/ Counterparty";
    // const text_e2 = "for product to be delivered / received. I/We understand that my/";
    // const text_e3 = "our transfer instruction will be automatically cancelled if my/our";
    // const text_e4 = "instruction cannot be confirmed with the above Transfer Agent/";
    // const text_e5 = "Counterparty within 10 business days after submission of this";
    // const text_e6 = "instruction to the Bank.";
    // doc.text(text_e1, 24, 24 * 3, { lineHeightFactor: 14 / 8, charSpace: 0.14 })
    // doc.text(text_e2, 24, 24 * 3 + 8 * 14 / 8, { lineHeightFactor: 14 / 8, charSpace: 0.04 })
    // doc.text(text_e3, 24, 24 * 3 + 8 * 14 / 8 * 2, { lineHeightFactor: 14 / 8 })
    // doc.text(text_e4, 24, 24 * 3 + 8 * 14 / 8 * 3, { lineHeightFactor: 14 / 8, charSpace: 0.05 })
    // doc.text(text_e5, 24, 24 * 3 + 8 * 14 / 8 * 4, { lineHeightFactor: 14 / 8, charSpace: 0.17 })
    // doc.text(text_e6, 24, 24 * 3 + 8 * 14 / 8 * 5, { lineHeightFactor: 14 / 8, charSpace: 0.17 })

    // const vOffset = 24 * 3 + 8 * 14 / 8 * 5 + 24;

    // const text1 = "本人/我們必須向有關轉戶代理人/交易對手作出指示以完成交付產品";
    const text1 = "（）電話資產詳情可供轉入產品代號產品名稱資產類型市場貨幣轉入單位號碼電郵絡幣市場價可信賴的人士確認聲明（如適用) 客戶聲明 其他"
    // const text2 = "的程序。本人/我們並同意如該指令不能在提交本指令到銀行後10個工";
    // const text3 = "作日内與上述轉戶代理人/交易對手確認，本人/我們的指令將被自動";
    // const text4 = "取消"
    // doc.text(text1, 24, vOffset, { lineHeightFactor: 14 / 8, charSpace: 0.17 })
    // doc.text(text2, 24, vOffset + 8 * 14 / 8, { lineHeightFactor: 14 / 8 })
    // doc.text(text3, 24, vOffset + 8 * 14 / 8 * 2, { lineHeightFactor: 14 / 8, charSpace: 0.17 })
    // const lineText = doc.splitTextToSize("(If any product to be transfered in (if any) is a packaged retail and insuance-based investment product)(If any product (If any product (If any product (If any product (If any product (If any product ", 245.5)
    doc.text(text1, 24, 24, { lineHeightFactor: 14 / 8 })

    const blob = doc.output("blob");
    const url = URL.createObjectURL(blob);
    window.open(url, "_blank")
  }

  return (
   <button onClick={generatePdf}>123</button>
  );
}

export default App;
