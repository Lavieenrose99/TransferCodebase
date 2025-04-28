const Fontmin = require("fontmin")

const text0 = "您的确认"
const text0_e = "Your acknowledgement";
const text1 = "本人/我們現授權銀行及/或鼎康代理有限公司 (或銀行的其他代理人)(只適用於基金轉戶) 代本人/我們執行一切所需文件，以根據財富管理投資組合條款及細則(財富管理戶口)(可予不時補充、修改或替代)(或任何其他適用之條款及細則)執行以上之指示"
const text2 = "本人/我們必須向有關轉戶代理人/交易對手作出指示以完成交付產品的程序。本人/我們並同意如該指令不能在提交本指令到銀行後10個工作日内與上述轉戶代理人/交易對手確認，本人/我們的指令將被自動取消"
const text2_e = "I/We must give instruction to the Transfer Agent/ Counterparty for product to be delivered / received. I/We understand that my/our transfer instruction will be automatically cancelled if my/our instruction cannot be confirmed with the above Transfer Agent/Counterparty within 10 business days after submission of this instruction to the Bank."
const text3 = "本人/我們明白有關轉戶之所有指示及執行時間均以上列轉戶代理人/交易對手/產品發行人/託管機構/Euroclear/Cedel/CMU，如適用(統稱「轉戶交易對手」)之接納及批准為依歸，銀行不須對有開轉戶交易對手末能成功執行或延遲執行有關指示的後果承擔任何責任。"
const text4 = "本人/我們明白及確認以上之轉戶須以轉戶交易對手收訖作實。本人/我們不可在轉戶期間賣出上列產品，直至該產品之轉戶完成及持股已反映在本人的財富管理戶口後方可賣出";
const text5 = "上述轉戶的手續費(如有)將從結算戶口扣除。詳情請參閱銀行服務收費表。除此之外，本人/我們需承擔與此上述轉戶相關的成本和費用。";
const text6 = "本人/我們明白及碓認銀行並無責任就轉讓或處理上列產品之有效性作出檢查或提示，或就提交或執行此轉戶指示以致對任何債券擁有權造成之缺失作出補救或提示。";
const text7 = "本人/我們聲明本人/我們並非美國居民，亦非美國的國民。本人/我們須於成為或得悉可能成為美國居民或美國的國民後，在合理切實可行範圍內盡快以書面通知銀行，惟在任何情況下必須於30日內作出通知";
const text8 = `(若擬轉入的產品(如有)屬於零售及保險投資產品組合(英文為"packaged retail and insurance-based investment product"， 簡稱"PRIIP")) 本人/我們明白及確認銀行没有銷售擬轉入的零售及保險投資產品組合，也没有就該投資產品組合提供意見，因此銀行没有責任向本人/我們提供相關重要資訊文件(如沒有提供)(英文為"KeyInformation Document"，簡稱"KIDs")。`
const text9 = "本人/我們明白同意以下適用於股票的條:";
const text9_i = "任何實貨的存入/提取必須至本人/我們的同名戶口。因此，本人/我們聲明最終受益所有權沒有改變，另外，本人/我們在此同意賠償銀行因本人/我們上述指示導致的一切損失及法律責任。"
const text9_ii = "如屬實貨提取(只適用於港股)，經中央結算系統提取整手股票一般需時最少5個營業日。海外股票沒有實貨提取服務。";
const text9_iii = "如屬賈貨存入(只適用於港股)，銀行進行有關股票的轉名手續及內部處理程序需時最少15個營業日(不包括星期六及香港公衆假期)。海外股票没有實貨存入服務。";
const text9_iv = "如股票數目不足，銀行將不會執行(不論全部或部分)任何沽售、提取或處理任何股份的指示。";
const text9_v = `待股份證書(只適用於港股)("股份證書")準備妥當，銀行當即通知客戶。為保障客戶，如本人/我們或本人/我們的獲授權人如未能於股份證書可提取後8個星期内領取股份證書，本人/我們同意及授權銀行將把股票重新存入中央結算系統。屆時本人/我們若仍欲提取股票，需再次發出提取指示。`
const text9_vi = "本人/我們明白，正在轉賬/存入的股票並不能買賣，直至有關指示已處理及持股已反映在本人/我們的財富管理戶口爲止。"
const text0_1 = "可信賴的人士確認聲明（如適用）"
const text10 = "本人/我們並非任何制裁的指定目標。本人/我們確認，上述資產轉移並不包含以下證券或資產：(i)由美國財政部外國資產控制辦公室、聯合國安全理事會、歐盟、新加坡金融管理局或任何其他適用當地司法管轄區實施及管理的任何制裁所限制的證券或資產，(ii)證券或資產的任何發行人(包括發行人集團的實體及聯繫公司）為任何制裁的指定目標，以及(iii)涉及伊朗、叙利亞、朝鮮、古巴、克里米亞/頓涅茨克/盧甘斯克/赫爾松/扎波羅熱等烏克蘭地區、委內瑞拉、俄羅斯及/或白羅斯的證券或資產。"
const text11 = "本人/我們進一步確認，上述資產轉移並非與得自（不論直接或間接）某一受制裁國家/地區¹或指定方²的任何收益、收入或財富（包括收取股息）有關。"
const text12 = "本人/我們進一步同意，如上述資產轉移正受銀行審查以符合相關法律法規，或因法律及政策原因而被拒絕接納，則不得再重新提交予銀行，包括更改指示後亦不得重新提交。"
const text13 = "本人/我們確認，如本人/我們屬於上述類別，本人/我們已就此通知銀行。"
const text13_1 = "倘若本人/我們將任何投資轉移予任何一方或進行獲銀行僅作為託管人而接納的任何投資轉移，而該等轉移其後被銀行按酌情權認為是屬於/可能屬於任何受制裁範圍，則此類交易可能需要被撤銷、轉出、解除、平倉或以其他方式進行相應處理，以符合相關法規。本人/我們須按銀行要求採取必要措施，並將會彌償銀行（及確保銀行免受）因資產轉移及/或保管轉移資產而對銀行提起或銀行可能因此而蒙受或招致的任何及一切損失、收費或申索。"
const test_last_1 = "請確認閣下的指示已清楚、準備及完整地填妥於本表格内才簽署作實。"
const test_last_2 = "¹伊朗、敘利亞、古巴、朝鮮，以及克里米亞/頓涅茨克/盧甘斯克/赫爾松/扎波羅熱等烏克蘭地區;這些地區有時可能被稱爲俄羅斯地區，但在國際上仍被認爲是烏克蘭的一部分。"
const test_last_3 = "²任何被新加坡金融管理局、聯合國安全理事會、美國財政部外國資產控制辦公室、歐盟或銀行運營所在地的任何當地監管機構指定的個人、實體、團體或船隻。它還指由指定方擁有或控制的任何實體，包括由美國財政部外國資產控制辦公室公布佈指定方擁有50%或以上股份的實體，或由歐盟或英國公布佈的指定方擁有或控制50%以上股份的任何實體。"
const text_e = `(If any product to be transfered in (if any) is a packaged retail and insuance-based investment product)`
const texttreadd = '號碼電郵絡幣市場價姓'
const textBold = '資產詳情話可供轉入產品代號產品名稱資產類型市場貨幣轉入單位號碼電郵絡幣市場價可信賴的人士確認聲明（如適用) 客戶聲明 其他號碼電郵絡幣市場價姓類別請確認閣下的指示已清楚、準備及完整地填妥於本表格内才簽署作實。財富管理戶口詳情 交易對手資料（）'

const text = text0 + text0_e + text1 + text2 + text2_e + text3 + text4 + text5 + text6 + text7 + text8 + text9 + text9_i + text9_ii + text9_iii + text9_iv + text9_v + text9_vi + text0_1 + text10 + text11 + text12 + text13 + text13_1 + test_last_1 + test_last_2 + test_last_3 + text_e + texttreadd + textBold
const fontmin = new Fontmin()
    .src("./SourceHanSansCN-Normal.ttf")
    .use(Fontmin.glyph({
        text: text,
        hinting: false,
        basicText: true,
    }))
    .dest("./fonts")
fontmin.run();
