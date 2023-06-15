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
      description2: 'Cervical cancer develops when abnormal cells in the cervix grow and multiply uncontrollably. These abnormal cells can invade nearby tissues and spread to other parts of the body (metastasize). The development of cervical cancer is usually slow and may occur over several years. It is often preceded by a pre-cancerous stage called cervical dysplasia, where abnormal cells are present but have not yet become cancerous.',
      description3: 'Cervical cancer is a significant global health issue, particularly in low-income and middle-income countries where access to screening and treatment is limited. It is the fourth most common cancer in women worldwide. However, with proper screening, early detection, and treatment, cervical cancer is highly preventable and curable.',
      bgimg2: "linear-gradient(180deg, rgba(217, 217, 217, 0) 0%, #262626 100%),url('assets/Category-main/Breast-Cancer/bg2.jpg')",
      bgimg3: "linear-gradient(180deg, rgba(217, 217, 217, 0) 0%, #262626 100%),url('assets/Category-main/Breast-Cancer/bg3.jpg')",
      survivalrate: 68,
      stages: 4,
      types: 2,

      I_factors: 'Intrinsic factors (risk factors that cannot be changed)',
      factors_details1: [
        'Human papillomavirus (HPV) infection: Persistent infection with high-risk strains of HPV, particularly HPV types 16 and 18, is the most significant risk factor for developing cervical cancer. HPV is a sexually transmitted infection, and most sexually active individuals will contract HPV at some point in their lives. However, not all HPV infections lead to cervical cancer. Regular screening and vaccination against HPV can help prevent cervical cancer.',
        'Sexual activity: Early initiation of sexual activity and having multiple sexual partners increase the risk of HPV infection and cervical cancer. The more sexual partners a person has, the higher the risk of exposure to HPV.',
        'Smoking: Smoking cigarettes or being exposed to secondhand smoke increases the risk of cervical cancer. Chemicals in tobacco smoke can damage the DNA of cervical cells and contribute to the development of cancer.',
        'Weakened immune system: A weakened immune system, such as in individuals with HIV/AIDS or those taking immunosuppressive medications, increases the risk of HPV infection progressing to cervical cancer.',
      ],


      types_details: [
        'Squamous cell carcinoma: Squamous cell carcinoma is the most common type of cervical cancer, accounting for about 80-90% of cases. It originates in the thin, flat cells lining the outer surface of the cervix.',
        'Adenocarcinoma: Adenocarcinoma is a less common type of cervical cancer, accounting for about 10-20% of cases. It develops in the glandular cells of the cervix that produce mucus. Adenocarcinoma has been increasing in incidence in recent years.'
      ],

      type_img: 'assets/Category-main/cervical-Cancer/1.png',

      stages_details: [
        'Stage 0: Carcinoma in situ (CIS) or pre-cancerous stage where abnormal cells are present only in the inner lining of the cervix',
        'Stage I: Cancer is confined to the cervix',
        'Stage II: Cancer has spread beyond the cervix but not to the pelvic sidewall or lower third of the vagina',
        'Stage III: Cancer has spread to the pelvic sidewall or lower third of the vagina or causes kidney problems',
        'Stage IV: Cancer has spread to the bladder, rectum, or other parts of the body',
      ],

      symptoms: [
        'Abnormal vaginal bleeding, such as bleeding between periods, after sexual intercourse, or after menopause',
        'Unusual vaginal discharge that may be watery, thick, or foul-smelling',
        'Pelvic pain or pain during sexual intercourse',
        'Painful urination',
        'Increased urinary frequency',
        'Unexplained weight loss',
        'Fatigue',
      ],

      symptoms_img: 'assets/Category-main/cervical-Cancer/2.png',

      treatments: {
        define: 'Cervical cancer treatment options depend on the stage of the cancer and may include:',
        options: [
          'Surgery: Surgery is often used for early-stage cervical cancer to remove the cancerous tissue. It may involve a hysterectomy (removal of the uterus) with or without removal of the surrounding lymph nodes.',
          'Radiation therapy: Radiation therapy uses high-energy X-rays or other forms of radiation to kill cancer cells. It can be used as the primary treatment for cervical cancer or after surgery to destroy any remaining cancer cells.',
          'Chemotherapy: Chemotherapy uses drugs to kill cancer cells throughout the body. It can be used in combination with radiation therapy or surgery for advanced-stage cervical cancer.',
          'Targeted therapy: Targeted therapy drugs specifically target certain molecules or pathways involved in the growth of cancer cells. They may be used in combination with chemotherapy for advanced cervical cancer.',
        ],
        note: 'The choice of treatment depends on various factors, including the stage of cancer, overall health, and individual preferences. It is essential to discuss treatment options with a healthcare provider specializing in cancer care.',
      },

      treatments_img: 'assets/Category-main/cervical-Cancer/3.png',

    },


    {
      id: 3,
      name: 'Colon Cancer',
      description: 'Colon cancer is a type of cancer that develops in the colon. It usually begins as a noncancerous growth called a polyp, which can eventually turn cancerous',
      description2: 'The exact cause of colon cancer is unknown, but certain risk factors can increase the likelihood of developing the disease. These risk factors include age, family history of colon cancer or polyps, personal history of inflammatory bowel disease (such as Crohn\'s disease or ulcerative colitis), and inherited gene mutations (such as Lynch syndrome or familial adenomatous polyposis). Unhealthy lifestyle factors, such as a diet high in red and processed meats, sedentary behavior, obesity, and smoking, can also contribute to the development of colon cancer.',
      description3: 'Colon cancer typically starts as small, benign polyps in the colon or rectum. Over time, some of these polyps may become cancerous and grow into malignant tumors. If left untreated, colon cancer can spread to other parts of the body through the lymphatic system or bloodstream. However, with regular screening and early detection, colon cancer can often be treated successfully.',
      img: 'assets/Category-main/colan-cancer/raw main.png',
      bgimg: "linear-gradient(180deg, rgba(217, 217, 217, 0) 0%, #262626 100%),url('assets/Category-main/colan-cancer/raw main.png')",
      bgimg2: "linear-gradient(180deg, rgba(217, 217, 217, 0) 0%, #262626 100%),url('assets/Category-main/Breast-Cancer/bg2.jpg')",
      bgimg3: "linear-gradient(180deg, rgba(217, 217, 217, 0) 0%, #262626 100%),url('assets/Category-main/Breast-Cancer/bg3.jpg')",
      survivalrate: 64,
      stages: 4,
      types: 3,

      I_factors: 'Intrinsic factors (risk factors that cannot be changed)',
      factors_details1: [
        'Age: The risk of colon cancer increases with age. Most cases occur in individuals over 50, although it can occur at any age.',
        'Family history: Having a first-degree relative (parent, sibling, or child) with colon cancer or certain types of polyps increases the risk of developing the disease. The risk is even higher if multiple family members are affected or if the affected relative was diagnosed at a young age.',
        'Inflammatory bowel disease (IBD): Chronic inflammatory conditions of the colon, such as Crohn\'s disease or ulcerative colitis, increase the risk of colon cancer.',
        'Inherited gene mutations: Certain inherited gene mutations, such as those associated with Lynch syndrome or familial adenomatous polyposis (FAP), significantly increase the risk of colon cancer.',
      ],

      types_details: [
        'Adenocarcinomas',
        'Carcinoid tumors',
        'Gastrointestinal Stromal Tumors (GISTs)'
      ],
      type_img: 'assets/Category-main/colan-cancer/1.png',

      stages_details: [
        ' Cancer confined to inner lining of the colon.',
        ' Cancer spreads beyond inner lining to nearby tissues.',
        ' Cancer spreads to nearby lymph nodes.',
        ' Cancer spreads to distant organs or tissues.',
      ],
      symptoms: [
        'Persistent changes in bowel habits, such as diarrhea or constipation, that last for an extended period.',
        'Rectal bleeding or blood in the stool, which may appear bright red or dark and tarry.',
        'Abdominal pain or cramping that persists and is unrelated to diet or digestive issues.',
        'A feeling of incomplete bowel movements, as if there is more stool to pass.',
        'Unexplained weight loss that occurs without any intentional changes in diet or exercise.',
        'Fatigue or weakness that is not relieved by rest and is unexplained by other factors.',
        'Iron deficiency anemia, characterized by low levels of red blood cells due to chronic blood loss.',
      ],

      symptoms_img: 'assets/Category-main/colan-cancer/2.jpg',

      treatments: {
        define: 'Various approaches used to target and manage colon cancer effectively',
        options: [
          'Surgery: Removing the cancerous tumor and nearby affected tissues.',
          'Chemotherapy: Using drugs to kill cancer cells throughout the body.',
          'Radiation therapy: Using high-energy beams to destroy cancer cells.',
          'Targeted therapy: Targeting specific genes or proteins involved in cancer growth.',
          'Immunotherapy: Stimulating the immune system to recognize and destroy cancer cells.',
          'Palliative care: Providing relief from symptoms and improving quality of life.',
          'Clinical trials: Participating in research studies to explore innovative treatments.',
          'Surveillance/watchful waiting: Monitoring the cancer without immediate treatment.',
          'Adjuvant therapy: Additional treatment after surgery to prevent recurrence.',
          'Combination therapy: Using multiple treatment approaches in a coordinated manner.',
        ], note:
          'It is important to discuss your treatment options with your doctor or oncologist to determine the best course of action for your specific situation.',
      },

      treatments_img: 'assets/Category-main/colan-cancer/3.jpg',



    },


    {
      id: 4, name: 'Lung Cancer',
      description: 'A disease in which lung calls undergo abnormal growth resulting in formation of a lump known as tumor fllow by change in Lung size .',
      img: 'assets/Category-main/lung-cancer/raw main.png',
      bgimg: "linear-gradient(180deg, rgba(217, 217, 217, 0) 0%, #262626 100%),url('assets/Category-main/lung-cancer/raw main.png')",
      description2: 'There are two main types of lung cancer: non-small cell lung cancer (NSCLC) and small cell lung cancer (SCLC). NSCLC is the most common type, accounting for approximately 80% to 85% of all lung cancers, while SCLC accounts for about 10% to 15% of cases. Early detection and treatment are crucial for improving outcomes and survival rates.',
      description3: 'The symptoms of lung cancer may vary depending on the stage and type of cancer, but they can include persistent cough, chest pain, shortness of breath, hoarseness, weight loss, and recurring respiratory infections. If you experience any of these symptoms, it is important to consult a healthcare professional for evaluation and diagnosis.',
      bgimg2: "linear-gradient(180deg, rgba(217, 217, 217, 0) 0%, #262626 100%),url('assets/Category-main/Breast-Cancer/bg2.jpg')",
      bgimg3: "linear-gradient(180deg, rgba(217, 217, 217, 0) 0%, #262626 100%),url('assets/Category-main/Breast-Cancer/bg3.jpg')",
      survivalrate: 20,
      stages: 4,
      types: 2,

      I_factors: 'Intrinsic factors (risk factors that cannot be changed)',
      factors_details1: [
        'Smoking: Cigarette smoking is the leading cause of lung cancer. The risk increases with the number of cigarettes smoked and the duration of smoking.',
        'Secondhand smoke: Exposure to secondhand smoke increases the risk of developing lung cancer, particularly in non-smokers.',
        'Radon gas: Prolonged exposure to radon, a radioactive gas that can be found in homes, increases the risk of lung cancer.',
        'Family history: Having a close relative, such as a parent or sibling, with lung cancer increases the risk of developing the disease.',
        'Personal history of lung cancer: Individuals who have had lung cancer before are at a higher risk of developing a second lung cancer.',

      ],

      types_details: [

        '        Non-small cell lung cancer (NSCLC)',
        'Small cell lung cancer (SCLC)',
        'Carcinoid tumors of the lung',
        'Lung adenocarcinoma',
        'Squamous cell carcinoma of the lung',
        'Large cell carcinoma of the lung',

      ],
      type_img: 'assets/Category-main/lung-cancer/1.jpg',

      stages_details: [
         'Cancer is only present in the innermost lining of the lung.',
         'Cancer is limited to the lung and has not spread to nearby lymph nodes.',
         'Cancer may have spread to nearby lymph nodes.',
         'Cancer has spread to lymph nodes or other structures in the chest.',
         'Cancer has spread to other parts of the body (metastatic lung cancer).',

      ],

      symptoms: [
        'Persistent cough or changes in a chronic cough',
        'Coughing up blood or rust-colored sputum',
        'Chest pain that worsens with deep breathing, coughing, or laughing',
        'Hoarseness',
        'Shortness of breath',
        'Wheezing',
        'Unexplained weight loss',
        'Fatigue',
        'Recurring respiratory infections, such as bronchitis or pneumonia',
        ,
      ],

      symptoms_img: 'assets/Category-main/lung-cancer/2.png',

      treatments: {
        define: 'Various approaches used to target and manage lung cancer effectively.',
        options: [
          'Surgery: Removing the tumor and affected lung tissues.',
          'Chemotherapy: Using drugs to kill cancer cells throughout the body.',
          'Radiation therapy: Using high-energy beams to destroy cancer cells.',
          'Targeted therapy: Targeting specific genetic mutations or proteins in cancer cells.',
          'Immunotherapy: Stimulating the immune system to recognize and fight cancer cells.',
          'Palliative care: Providing relief from symptoms and improving quality of life.',
          'Clinical trials: Participating in research studies to explore innovative treatments.',
          'Surveillance/watchful waiting: Monitoring the cancer without immediate treatment.',
          'Adjuvant therapy: Additional treatment after surgery to prevent recurrence.',
          'Combination therapy: Using multiple treatment approaches in a coordinated manner',
        ], note:
          'It is important to discuss your treatment options with your doctor or oncologist to determine the best course of action for your specific situation.',
      },

      treatments_img: 'assets/Category-main/lung-cancer/3.png',



    },







  ];

  constructor() { }

  getItem(id: any) {
    const item = this.items.find(x => x.id == id);
    return item;
  }
}
