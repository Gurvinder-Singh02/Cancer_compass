import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  items: any[] = [
    {
      id: 1, name: 'Breast Cancer',
      description: ' A disease in which breast calls undergo abnormal growth resulting in formation of a lump known as tumor fllow by change in Breast size .',
      description2: 'Breast Cancer is a multifactorial disease characterized by uncontrolled growth of the breast cells. In other terms, the normal cells keep on dividing instead of dying after completion of their specific lifetime (termed as cancer cells) and form tumour that invade the nearby tissues and organs. Breast cancer is a multifactorial disease. It develops in response to many biological and molecular changes in the body, such as environmental, genetic, and hormonal changes',
      description3: 'Breast cancer is the formation lump, which is an extra mass of cells or tissues. These lumps may be observed/felt as a hard mass bulging out or within the skin may or may not accompanied with pain, swellings or redness.',
      img: 'assets/Category-main/Breast-Cancer/raw main.png',
      bgimg: "linear-gradient(180deg, rgba(217, 217, 217, 0) 0%, #262626 100%),url('assets/Category-main/Breast-Cancer/raw main.png')",
      bgimg2: "linear-gradient(180deg, rgba(217, 217, 217, 0) 0%, #262626 100%),url('assets/Category-main/Breast-Cancer/bg2.jpg')",
      bgimg3: "linear-gradient(180deg, rgba(217, 217, 217, 0) 0%, #262626 100%),url('assets/Category-main/Breast-Cancer/bg3.jpg')",
      survivalrate: 90,
      stages: 4,
      types: 8,

      I_factors: 'Intrinsic factors (risk factors that cannot be changed)',
      factors_details1: [
        'Age: it is the most noticed and studied risk factor. The chances of having breast cancer increase with an increase in age among women, especially around menopause While low Among women below 45 years old. There are certain types of breast cancers that occur more frequently than other for instance, ER-positive breast cancer occurs more frequently in all women, especially the age group between 40 to 59 A study has correlated the oestrogen receptor overexpression with increase in age prominently up to 50 years of age(approximately near or after menopause)',
        'Gender: Breast cancer is highly prevalent in females due higher response of hormones involved in breast development.Only 1% of male suffers from sporadic cancer and<1% experience inherited breast cancer',
        'Genetic: Breast cancer can also be inherited from the parents.BRCA1 and BRCA2 genes are known to repair damaged DNA.They are also known as tumor- suppressing genes.Any mutation in these genes leads to abnormal cell growth that causes breast cancer among women.The change in coding sequence may result in hereditary syndromes called HBC - SS(Hereditary Breast Cancer Site Speciﬁc) or HBOC(Hereditary Breast Ovarian Cancer) syndrome which manifests as breast cancer',
        'Early menarche and late menopause, both are risk factors for breast cancer. The chances of breast cancer raise by 3% with each year of delay in menopause while 5% in the case of early menarche',
        'Women who give birth at an early age more than once reduce the risk of breast malignancy by 30% whereas nulliparous women elevate the risk of breast cancer. Moreover, the first pregnancy after 30 years of age may increase the chances while in giving birth in the early 20 reduces the chances of breast cancer development',
        'Lactation: Lactation protects against breast cancer effectively. The reports studying correlation between childbirth and lactation periods suggests that longer lactation periods may reduce the risk of breast cancer development by 50%. Lengthier the lactation duration more will be the safety',
        'Family history: The first-grade generation (Those who are first diagnosed with breast neoplasm) pose a risk for blood relatives such as mothers and sisters. This happens when a mutated copy of BRCA1 and BRCA2 has been inherited from the mother. The chances two folds increase when there are more than two members suffering breast cancer in the first-grade generation.',
        'Environment: Many natural factors are concluded as possible risk factors. One of the most important intrinsic risk factors is ultraviolet radiation. Exposure to ionizing radiations induce the DNA damage and result in mutated genes enhancing the risk of cancer development ',
      ],

      E_factors: 'Extrinsic factors (risk factors that can be changed)',

      E_factors_Details: {
        Lifestyle: 'Physically inactivity i.e. not exercising results in significant weight gain. It can further result in obesity which is associated with elevated levels of estrogen in females, particularly after menopause. An increase in insulin and related growth factors due to obesity may initiate uncontrolled cell growth. It was reported that women exercising 3-5 times a week reduces the risk by 20-30%',
        Diet: [
          'Alcohol consumption: Alcohol consumption has been linked to many other diseases since a long time. Estrogen and related hormones gets elevated in the blood and further stimulates the estrogen-related pathways. According to a meta-analysis, consuming 34-55 grams of alcohol per day increases the chances of breast cancer by 32% and an additional 7.1% if 10 grams of more alcohol is consumed per day',
          'Combination of high fat and processed food with flavouring agents and preservatives (infused chemicals to enhance the flavour and shelf life of food, respectively) is harmful to menopausal women as it can increase the chances of neoplastic transformation of mammary cells without an increase in hormones. The consumption of red meat is also considered a risk factor for premenopausal women for positive breast cancer'
        ],
        'Hormonal factors': 'The most commonly used contraceptive pills are basically the combinations pills containing natural female estrogen and progesterone hormones which restrict the phase of ovulation and penetration of sperm. Some other hormones in form of contraceptive pill such as progestin, an artificial progesterone hormone are also being used for birth control. The Nurses’ Health Study (2010) analysed that those females of age between 24 to 43 years had slightly increased risk of breast cancer risk, especially the females taking the ’Triphasic Pill’- the pills containing three combinations of progestin and estrogen hormone concentrations. Breast cancer significantly increases among females taking estrogen and progesterone hormones or contraceptive pills at early age as of 15 years There are some controversial statements regarding hormone replacement therapy suggesting that it is used to treat the decreased production of hormones after menopause. In some cases, the HRT proves to be an efficient method but, in some cases, it may counter breast cancer or increases the risk. Based on the duration and type of HRT therapy (estrogen-progesterone HRT or Oestrogen- HRT) the chances of breast cancer vary',

      },
      types_details: ['Angiosarcoma',
        'Ductal carcinoma in situ (DCIS)',
        'Inflammatory breast cancer',
        'Invasive lobular carcinoma',
        'Lobular carcinoma in situ (LCIS)',
        'Male breast cancer',
        'Paget&#39;s disease of the breast',
        'Recurrent / relapsing breast',
        'cancer'],
      type_img: 'assets/Category-main/Breast-Cancer/types_.png',

      stages_details: [
        'Non-invasive (in situ) cancer',
        'Cancer is 2 cm or smaller and has not spread to the lymph nodes',
        'Cancer is larger than 2 cm and has not spread to the lymph nodes',
        'Cancer has spread to the lymph nodes',
        'Cancer has spread to other parts of the body'],

      symptoms: [
        'A lump or thickening in the breast or underarm area',
        'A change in the size or shape of the breast',
        'Nipple discharge or inversion',
        'Skin changes, such as redness, dimpling, or puckering',
        'Pain or tenderness in the breast',
        'Swelling in the breast or armpit',
        'A rash around the nipple',
        'Changes in the texture or appearance of the skin on the breast',
      ],

      symptoms_img: 'assets/Category-main/Breast-Cancer/aware_group.png',

      treatments: {
        define: 'Breast cancer treatments may vary depending on the stage of the cancer and other factors such as age, general health status of the patient. Here are some common treatment opti',
        options: [
          'Surgery: Surgery is the most common treatment for breast cancer. The type of surgery depends on the stage of the cancer. In some cases, a lumpectomy (removing only the tumor and some surrounding tissue) is performed, while in other cases a mastectomy (removing the entire breast) may be needed.',
          'Radiation therapy: Radiation therapy involves using high-energy beams to destroy cancer cells. It may be used after surgery to kill any remaining cancer cells or in combination with chemotherapy.',
          'Chemotherapy: Chemotherapy uses drugs to kill cancer cells throughout the body. It can be administered orally or intravenously.',
          'Hormonal therapy: Hormonal therapy is used to treat hormone receptor-positive breast cancers. This type of cancer grows in response to estrogen or progesterone hormones. Hormonal therapy either lowers the level of these hormones in the body or blocks their effect on breast cancer cells.',
          'Targeted therapy: Targeted therapy is a newer type of treatment that targets specific genes, proteins, or tissues that contribute to the growth of cancer cells. Herceptin is an example of a targeted therapy drug used to treat breast cancer.',],
        note:
          'It is important to discuss your treatment options with your doctor or oncologist to determine the best course of action for your specific situation.',
      },

      treatments_img: 'assets/Category-main/Breast-Cancer/treatment.png',



    },
    {
      id: 2, name: 'Cervical Cancer',
      description: 'A disease in which cells of the cervix undergo abnormal growth resulting in formation of a lump known as tumor fllow by change in Cervix size .',
      img: 'assets/Category-main/cervical-cancer/raw main.png',
      bgimg: "linear-gradient(180deg, rgba(217, 217, 217, 0) 0%, #262626 100%),url('assets/Category-main/cervical-cancer/raw main.png')",
      survivalrate: 90,
      stages: 4,
      types: 8,
      I_factors: 'Intrinsic factors (risk factors that cannot be changed)',
      factors_details1: [
        'Age: it is the most noticed and studied risk factor. The chances of having breast cancer increase with an increase in age among women, especially around menopause While low Among women below 45 years old. There are certain types of breast cancers that occur more frequently than other for instance, ER-positive breast cancer occurs more frequently in all women, especially the age group between 40 to 59 A study has correlated the oestrogen receptor overexpression with increase in age prominently up to 50 years of age(approximately near or after menopause)',
        'Gender: Breast cancer is highly prevalent in females due higher response of hormones involved in breast development.Only 1% of male suffers from sporadic cancer and<1% experience inherited breast cancer',
        'Genetic: Breast cancer can also be inherited from the parents.BRCA1 and BRCA2 genes are known to repair damaged DNA.They are also known as tumor- suppressing genes.Any mutation in these genes leads to abnormal cell growth that causes breast cancer among women.The change in coding sequence may result in hereditary syndromes called HBC - SS(Hereditary Breast Cancer Site Speciﬁc) or HBOC(Hereditary Breast Ovarian Cancer) syndrome which manifests as breast cancer',
        'Early menarche and late menopause, both are risk factors for breast cancer. The chances of breast cancer raise by 3% with each year of delay in menopause while 5% in the case of early menarche',
        'Women who give birth at an early age more than once reduce the risk of breast malignancy by 30% whereas nulliparous women elevate the risk of breast cancer. Moreover, the first pregnancy after 30 years of age may increase the chances while in giving birth in the early 20 reduces the chances of breast cancer development',
        'Lactation: Lactation protects against breast cancer effectively. The reports studying correlation between childbirth and lactation periods suggests that longer lactation periods may reduce the risk of breast cancer development by 50%. Lengthier the lactation duration more will be the safety',
        'Family history: The first-grade generation (Those who are first diagnosed with breast neoplasm) pose a risk for blood relatives such as mothers and sisters. This happens when a mutated copy of BRCA1 and BRCA2 has been inherited from the mother. The chances two folds increase when there are more than two members suffering breast cancer in the first-grade generation.',
        'Environment: Many natural factors are concluded as possible risk factors. One of the most important intrinsic risk factors is ultraviolet radiation. Exposure to ionizing radiations induce the DNA damage and result in mutated genes enhancing the risk of cancer development ',
      ],

      E_factors: 'Extrinsic factors (risk factors that can be changed)',

      E_factors_Details: {
        Lifestyle: 'Physically inactivity i.e. not exercising results in significant weight gain. It can further result in obesity which is associated with elevated levels of estrogen in females, particularly after menopause. An increase in insulin and related growth factors due to obesity may initiate uncontrolled cell growth. It was reported that women exercising 3-5 times a week reduces the risk by 20-30%',
        Diet: [
          'Alcohol consumption: Alcohol consumption has been linked to many other diseases since a long time. Estrogen and related hormones gets elevated in the blood and further stimulates the estrogen-related pathways. According to a meta-analysis, consuming 34-55 grams of alcohol per day increases the chances of breast cancer by 32% and an additional 7.1% if 10 grams of more alcohol is consumed per day',
          'Combination of high fat and processed food with flavouring agents and preservatives (infused chemicals to enhance the flavour and shelf life of food, respectively) is harmful to menopausal women as it can increase the chances of neoplastic transformation of mammary cells without an increase in hormones. The consumption of red meat is also considered a risk factor for premenopausal women for positive breast cancer'
        ],
        'Hormonal factors': 'The most commonly used contraceptive pills are basically the combinations pills containing natural female estrogen and progesterone hormones which restrict the phase of ovulation and penetration of sperm. Some other hormones in form of contraceptive pill such as progestin, an artificial progesterone hormone are also being used for birth control. The Nurses’ Health Study (2010) analysed that those females of age between 24 to 43 years had slightly increased risk of breast cancer risk, especially the females taking the ’Triphasic Pill’- the pills containing three combinations of progestin and estrogen hormone concentrations. Breast cancer significantly increases among females taking estrogen and progesterone hormones or contraceptive pills at early age as of 15 years There are some controversial statements regarding hormone replacement therapy suggesting that it is used to treat the decreased production of hormones after menopause. In some cases, the HRT proves to be an efficient method but, in some cases, it may counter breast cancer or increases the risk. Based on the duration and type of HRT therapy (estrogen-progesterone HRT or Oestrogen- HRT) the chances of breast cancer vary',

      },
      types_details: ['Angiosarcoma',
        'Ductal carcinoma in situ (DCIS)',
        'Inflammatory breast cancer',
        'Invasive lobular carcinoma',
        'Lobular carcinoma in situ (LCIS)',
        'Male breast cancer',
        'Paget&#39;s disease of the breast',
        'Recurrent / relapsing breast',
        'cancer'],
      type_img: 'assets/Category-main/Breast-Cancer/types_.png',

      stages_details: [
        'Non-invasive (in situ) cancer',
        'Cancer is 2 cm or smaller and has not spread to the lymph nodes',
        'Cancer is larger than 2 cm and has not spread to the lymph nodes',
        'Cancer has spread to the lymph nodes',
        'Cancer has spread to other parts of the body'],

      symptoms: [
        'A lump or thickening in the breast or underarm area',
        'A change in the size or shape of the breast',
        'Nipple discharge or inversion',
        'Skin changes, such as redness, dimpling, or puckering',
        'Pain or tenderness in the breast',
        'Swelling in the breast or armpit',
        'A rash around the nipple',
        'Changes in the texture or appearance of the skin on the breast',
      ],

      symptoms_img: 'assets/Category-main/Breast-Cancer/aware_group.png',

      treatments: {
        define: 'Breast cancer treatments may vary depending on the stage of the cancer and other factors such as age, general health status of the patient. Here are some common treatment opti',
        options: [
          'Surgery: Surgery is the most common treatment for breast cancer. The type of surgery depends on the stage of the cancer. In some cases, a lumpectomy (removing only the tumor and some surrounding tissue) is performed, while in other cases a mastectomy (removing the entire breast) may be needed.',
          'Radiation therapy: Radiation therapy involves using high-energy beams to destroy cancer cells. It may be used after surgery to kill any remaining cancer cells or in combination with chemotherapy.',
          'Chemotherapy: Chemotherapy uses drugs to kill cancer cells throughout the body. It can be administered orally or intravenously.',
          'Hormonal therapy: Hormonal therapy is used to treat hormone receptor-positive breast cancers. This type of cancer grows in response to estrogen or progesterone hormones. Hormonal therapy either lowers the level of these hormones in the body or blocks their effect on breast cancer cells.',
          'Targeted therapy: Targeted therapy is a newer type of treatment that targets specific genes, proteins, or tissues that contribute to the growth of cancer cells. Herceptin is an example of a targeted therapy drug used to treat breast cancer.',],
        note:
          'It is important to discuss your treatment options with your doctor or oncologist to determine the best course of action for your specific situation.',
      },

      treatments_img: 'assets/Category-main/Breast-Cancer/treatment.png',


    },
    {
      id: 3, name: 'Colon Cancer',
      description: 'A disease in which colon calls undergo abnormal growth resulting in formation of a lump known as tumor fllow by change in Colon size .',
      img: 'assets/Category-main/colan-cancer/raw main.png',
      bgimg: "linear-gradient(180deg, rgba(217, 217, 217, 0) 0%, #262626 100%),url('assets/Category-main/colan-cancer/raw main.png')",
      survivalrate: 90,
      stages: 4,
      types: 8
    },
    {
      id: 4, name: 'Lung Cancer',
      description: 'A disease in which lung calls undergo abnormal growth resulting in formation of a lump known as tumor fllow by change in Lung size .',
      img: 'assets/Category-main/lung-cancer/raw main.png',
      bgimg: "linear-gradient(180deg, rgba(217, 217, 217, 0) 0%, #262626 100%),url('assets/Category-main/lung-cancer/raw main.png')",
      survivalrate: 90,
      stages: 4,
      types: 8
    },


  ];

  constructor() { }

  getItem(id: any) {
    const item = this.items.find(x => x.id == id);
    return item;
  }
}
