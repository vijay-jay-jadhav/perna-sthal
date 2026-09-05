import fs from 'fs';
import path from 'path';

export const mudrasData = [
  {
    id: 'dhyana-mudra',
    file: 'dhyana-mudra.html',
    num: '01',
    titleEn: 'Dhyanamudra',
    titleEnFull: 'Dhyanamudra | Meditation Gesture',
    titleMr: 'ध्यानमुद्रा | समाधीमुद्रा',
    taglineEn: 'Meditation & Highest State of Tranquility',
    taglineMr: 'ध्यान आणि मन:शांती',
    iconType: 'meditate',
    image: null,
    mrParas: [
      'गौतम बुद्धांच्या या ध्यानमुद्रेतून ध्यान आणि मन:शांती प्रतीत होते. ज्ञानप्राप्तीसाठी आवश्यक अशी एकाग्रता आणि आत्मपरीक्षण दर्शविणारी ही मुद्रा आहे. दोन्ही हातांचे तळवे उघडून एकावर एक ठेवून ही मुद्रा दर्शविली जाते. दोन्ही हातांचे अंगठे एकमेकांना स्पर्श करतात तेव्हा त्रिकोणी आकार तयार होतो. या त्रिकोणातून त्रिरत्नांचा अर्थ प्रतीकात्मक रूपाने प्रतीत होतो.',
      'त्रिरत्नांपैकी पहिले रत्न म्हणजे ज्ञानप्राप्तीचे प्रतीक असणारे गौतम बुद्ध. दुसरे रत्न म्हणजे ज्ञानप्राप्तीची वाट दाखवणारे नियम म्हणजेच धम्म आणि तिसरे रत्न म्हणजे ज्ञानप्राप्तीसाठी प्रयत्न करणारा समुदाय म्हणजेच संघ.',
      'कधीकधी या हातांत औषधाचा वाडगा असतो, तेव्हा त्या मूर्तीला \'भैषज्यगुरू\' म्हणजे \'औषधोपचार करणारे गौतम बुद्ध\' म्हणून ओळखले जाते. कधीकधी ही मुद्रा धारण केल्यामुळे ती मूर्ती अमिताभ (अमर्याद तेजस्वी) बुद्ध म्हणून ओळखले जाते.'
    ],
    enParas: [
      'This gesture indicates meditation or the highest state of tranquility. It represents the deep concentration and introspection that lead to enlightenment.',
      'The triangular formation created by the hands in the Dhyana Mudra is deeply symbolic. It represents the Triratna—the Buddha, who embodies enlightenment; the Dharma, the teachings that lead to enlightenment; and the Sangha, the community of practitioners who follow the path to enlightenment.',
      'When a medicine bowl is shown atop the hands, the figure is often Bhaishajyaguru, associated with healing. The same mudra may also be seen in representations of Amitabha (Limitless Light).'
    ],
    symbols: [
      {
        icon: '△',
        titleEn: 'Triangular Formation',
        titleMr: 'त्रिकोणी आकार',
        descEn: 'Hands resting together with touching thumbs create a sacred triangle embodying the Triratna (Three Jewels).',
        descMr: 'दोन्ही हातांचे तळवे आणि अंगठ्यांचा स्पर्श त्रिरत्नांचे प्रतीकात्मक त्रिकोण निर्माण करतो.'
      },
      {
        icon: '☸',
        titleEn: 'Triratna (Three Jewels)',
        titleMr: 'त्रिरत्न प्रतीक',
        descEn: 'Buddha (Enlightenment), Dharma (Teachings & Path), and Sangha (Community of earnest practitioners).',
        descMr: 'ज्ञानप्राप्तीचे प्रतीक गौतम बुद्ध, नियम म्हणजे धम्म आणि साधकांचा समुदाय म्हणजे संघ.'
      },
      {
        icon: '✦',
        titleEn: 'Healing & Amitabha',
        titleMr: 'भैषज्यगुरू व अमिताभ',
        descEn: 'Associated with Bhaishajyaguru (the healing Buddha) with medicine bowl and Amitabha (Limitless Light).',
        descMr: 'औषधाचा वाडगा असलेल्या मूर्तीस भैषज्यगुरू आणि अमर्याद तेजस्वी अमिताभ बुद्ध मानले जाते.'
      }
    ],
    audioMr: 'ध्यानमुद्रा, समाधीमुद्रा. गौतम बुद्धांच्या या ध्यानमुद्रेतून ध्यान आणि मन:शांती प्रतीत होते. ज्ञानप्राप्तीसाठी आवश्यक अशी एकाग्रता आणि आत्मपरीक्षण दर्शविणारी ही मुद्रा आहे. हातांच्या त्रिकोणातून बुद्ध, धम्म आणि संघ या त्रिरत्नांचा अर्थ प्रतीत होतो.',
    audioEn: 'Dhyanamudra, the Meditation Gesture. This gesture indicates meditation or the highest state of tranquility. It represents deep concentration and introspection leading to enlightenment, with hands forming the symbolic Triratna triangle.'
  },
  {
    id: 'vitarka-mudra',
    file: 'vitarka-mudra.html',
    num: '02',
    titleEn: 'Vitarkamudra',
    titleEnFull: 'Vitarkamudra | Vyakhyanamudra | Teaching Gesture',
    titleMr: 'वितर्कमुद्रा | व्याख्यानमुद्रा',
    taglineEn: 'Teaching, Intellectual Discussion & Debate',
    taglineMr: 'उपदेश, वैचारिक चर्चा आणि वादचर्चा',
    iconType: 'vitarka',
    image: 'images/mudras/vitarka-mudra.png',
    mrParas: [
      'या मुद्रेने उपदेश, वैचारिक चर्चा आणि वादचर्चेचा निर्देश होतो. अंगठा आणि तर्जनी यांचा स्पर्श होऊन वर्तुळाकार तयार होतो. शिकणे आणि शिकवणे यांमधून चर्चा आणि संवादाच्या माध्यमातून ज्ञानाचे चक्र अविरत चालते, असा याचा प्रतीकात्मक अर्थ अभिप्रेत असतो.',
      'या मुद्रेतील तीन उभी बोटेदेखील बुद्ध, धम्म आणि संघ यांचा निर्देश प्रतीकात्मकरीत्या करतात. शिक्षक, शिकवण आणि साधकांच्या समुदायातील आंतरिक संबंध या मुद्रेतून दर्शविले जातात.'
    ],
    enParas: [
      'This gesture indicates teaching, intellectual discussion, and debate. The thumb touching the index finger forms a circle of understanding, while the other fingers remain outstretched. This circle represents the cycle of teaching and learning, emphasizing that knowledge is a continuous process that evolves through discussion and intellectual engagement.',
      'The extended fingers are also symbolic. The three extended fingers represent the three jewels of Buddhism—the Buddha, the Dharma (teachings), and the Sangha (community). This supports the idea that the mudra is about dissemination of knowledge and the interconnection between the teacher, the teachings, and the community of practitioners.'
    ],
    symbols: [
      {
        icon: '◯',
        titleEn: 'Circle of Understanding',
        titleMr: 'ज्ञानाचे अविरत चक्र',
        descEn: 'Thumb touching index finger forms the eternal cycle where knowledge evolves through discussion.',
        descMr: 'अंगठा आणि तर्जनीचा स्पर्श ज्ञानाचे अविरत चालणारे संवादचक्र दर्शवतो.'
      },
      {
        icon: '|||',
        titleEn: 'Three Extended Fingers',
        titleMr: 'त्रिरत्न सुसंवाद',
        descEn: 'Three upright fingers signify the Three Jewels: Buddha, Dharma, and Sangha.',
        descMr: 'तीन उभी बोटे बुद्ध, धम्म व संघ आणि साधकांमधील आंतरिक संबंध दर्शवितात.'
      },
      {
        icon: '✦',
        titleEn: 'Dialectic Wisdom',
        titleMr: 'वैचारिक स्पष्टता',
        descEn: 'Embodies intellectual debate, instruction, and the mutual flow between teacher and learner.',
        descMr: 'शिकणे व शिकवणे यांच्यातील सखोल वैचारिक देवाणघेवाण या मुद्रेतून व्यक्त होते.'
      }
    ],
    audioMr: 'वितर्कमुद्रा, व्याख्यानमुद्रा. या मुद्रेने उपदेश, वैचारिक चर्चा आणि वादचर्चेचा निर्देश होतो. अंगठा आणि तर्जनी यांचा स्पर्श होऊन ज्ञानाचे चक्र अविरत चालते. तीन उभी बोटे बुद्ध, धम्म आणि संघ यांचा निर्देश करतात.',
    audioEn: 'Vitarkamudra or Vyakhyanamudra, the Teaching Gesture. This gesture indicates teaching, intellectual discussion, and debate. The thumb and index finger form a circle representing the continuous evolution of knowledge through dialogue.'
  },
  {
    id: 'vajramudra',
    file: 'vajramudra.html',
    num: '03',
    titleEn: 'Vajramudra',
    titleEnFull: 'Vajramudra | Wisdom Gesture',
    titleMr: 'वज्रमुद्रा | ज्ञानमुद्रा | बोधश्रीमुद्रा',
    taglineEn: 'Supreme Wisdom & Union of Realms',
    taglineMr: 'आत्मज्ञान आणि लौकिक-पारलौकिक एकात्मता',
    iconType: 'wisdom',
    image: null,
    mrParas: [
      'या मुद्रेतून लौकिक आणि पारलौकिक जगाची एकात्मता दर्शवली जाते. यात साधकाच्या ज्ञानप्राप्तीच्या मार्गात येणाऱ्या अडथळ्यांपासून त्याचे संरक्षण दर्शवले आहे. महावैरोचन रूपातील गौतम बुद्धांच्या मूर्तींमध्ये ही मुद्रा बहुधा आढळते.',
      'यातील उजव्या हाताची तर्जनी ही गौतम बुद्धांची आंतरिक समज आणि सत्य ज्ञानाचे प्रतीक असते. या बोटाभोवती असणारी डाव्या हाताची मूठ ही अंतिम सत्यावर आवरण घालणाऱ्या बाह्य जगाचे किंवा मायेचे प्रतीक मानले जाते. ही सहा बोटे मिळून पृथ्वी, जल, तेज, वायू, अवकाश आणि चेतना यांचे प्रतीक मानली जातात.'
    ],
    enParas: [
      'This powerful gesture expresses the union of the spiritual and material realms and is thought to restrain passions hindering the practitioner\'s enlightenment. This gesture indicates supreme knowledge or wisdom and is usually associated with Mahavairochana.',
      'The erect index finger represents true knowledge or the inner wisdom of the Buddha. The enclosing hand represents worldly illusion or the protective outer shell hiding ultimate truth. The six fingers signify earth, water, fire, air, space, and consciousness united together.'
    ],
    symbols: [
      {
        icon: '☝',
        titleEn: 'Inner Wisdom Finger',
        titleMr: 'सत्य ज्ञानाची तर्जनी',
        descEn: 'The erect index finger represents true knowledge and the inner wisdom of the Buddha.',
        descMr: 'उजव्या हाताची तर्जनी गौतम बुद्धांची आंतरिक समज आणि सत्य ज्ञानाचे प्रतीक आहे.'
      },
      {
        icon: '✊',
        titleEn: 'Protective Clasp (Maya)',
        titleMr: 'बाह्य जग व माया',
        descEn: 'The enclosing left hand represents worldly illusion, passions, or the protective outer shell.',
        descMr: 'डाव्या हाताची मूठ अंतिम सत्यावर आवरण घालणाऱ्या बाह्य जगाचे किंवा मायेचे प्रतीक मानले जाते.'
      },
      {
        icon: '☸',
        titleEn: 'Six Elements United',
        titleMr: 'सहा तत्त्वांची एकात्मता',
        descEn: 'The six fingers unite earth, water, fire, air, space, and pure consciousness.',
        descMr: 'सहा बोटे मिळून पृथ्वी, जल, तेज, वायू, अवकाश आणि चेतना यांची एकात्मता दर्शवतात.'
      }
    ],
    audioMr: 'वज्रमुद्रा, ज्ञानमुद्रा किंवा बोधश्रीमुद्रा. या मुद्रेतून लौकिक आणि पारलौकिक जगाची एकात्मता दर्शवली जाते. उजव्या हाताची तर्जनी आंतरिक सत्य ज्ञान दर्शवते, तर डाव्या हाताची मूठ बाह्य जग आणि मायेचे प्रतीक असते.',
    audioEn: 'Vajramudra, the Wisdom Gesture. It expresses the union of spiritual and material realms and supreme wisdom, uniting earth, water, fire, air, space, and consciousness.'
  },
  {
    id: 'dhammachakramudra',
    file: 'dhammachakramudra.html',
    num: '04',
    titleEn: 'Dhammachakramudra',
    titleEnFull: 'Dhammachakramudra | Wheel of Law Mudra',
    titleMr: 'धम्मचक्रमुद्रा',
    taglineEn: 'Turning the Wheel of Law & Truth',
    taglineMr: 'धम्माचे चक्र फिरवणे आणि धर्मोपदेश',
    iconType: 'wheel',
    image: null,
    mrParas: [
      'या मुद्रेतून धम्माचे चक्र फिरवण्याच्या कृतीचा निर्देश केला जातो. हे महान चक्र बुद्धांच्या उपदेशामुळे परिवर्तन पावते, फिरते. त्यामुळे सर्वसामान्यांना संसाराच्या म्हणजे आपल्या भवतालाच्या पलीकडे जाण्यासाठी प्रेरणा मिळते आणि वाट सापडते.',
      'उत्तरकालीन बौद्ध कलेमध्ये धम्मचक्रमुद्रा ही लोकप्रिय असून गौतम बुद्धांना निर्वाण प्राप्त झाल्यानंतर सारनाथ येथे दिलेल्या पहिल्या धर्मोपदेशाचे चित्रण करताना त्यांचे हात या मुद्रेत दर्शविले जातात.'
    ],
    enParas: [
      'This gesture refers to turning the wheel of Law or of teaching about the Law.',
      'It is through turning this great wheel by means of their teachings that the Buddhas guide the world through the six realms of existence, also represented by a wheel.',
      'This image is popular in later Buddhist art. The Buddha is usually depicted making this gesture during his first sermon after his enlightenment at Sarnath.'
    ],
    symbols: [
      {
        icon: '☸',
        titleEn: 'Wheel of Cosmic Law',
        titleMr: 'धम्माचे महान चक्र',
        descEn: 'Turning the wheel signifies setting the universal laws of truth, morality, and insight into eternal motion.',
        descMr: 'बुद्धांच्या उपदेशामुळे हे महान चक्र परिवर्तन पावते व संसाराच्या पलीकडे जाण्याची वाट दाखवते.'
      },
      {
        icon: '🏛',
        titleEn: 'First Sermon at Sarnath',
        titleMr: 'सारनाथ येथील प्रथम धर्मोपदेश',
        descEn: 'Commemorates the historic first sermon at the Deer Park in Sarnath following enlightenment.',
        descMr: 'निर्वाण प्राप्त झाल्यानंतर सारनाथ येथे दिलेल्या ऐतिहासिक पहिल्या धर्मोपदेशाचे हे चित्रण आहे.'
      },
      {
        icon: '◈',
        titleEn: 'Six Realms Guidance',
        titleMr: 'सहा अस्तित्वांच्या पलीकडे',
        descEn: 'The Buddhas guide sentient beings through the six realms of existence toward ultimate peace.',
        descMr: 'संसाराच्या भवतालाच्या पलीकडे नेऊन सर्वसामान्यांना शांतीची प्रेरणा देते.'
      }
    ],
    audioMr: 'धम्मचक्रमुद्रा. या मुद्रेतून धम्माचे चक्र फिरवण्याच्या कृतीचा निर्देश केला जातो. गौतम बुद्धांना निर्वाण प्राप्त झाल्यानंतर सारनाथ येथे दिलेल्या पहिल्या धर्मोपदेशाचे हे पवित्र प्रतीक आहे.',
    audioEn: 'Dhammachakramudra, the Wheel of Law Mudra. This gesture refers to turning the wheel of Law and commemorates the Buddha\'s legendary first sermon at Sarnath.'
  },
  {
    id: 'bhoomisparshamudra',
    file: 'bhoomisparshamudra.html',
    num: '05',
    titleEn: 'Bhoomisparshamudra',
    titleEnFull: 'Bhoomisparshamudra | Earth-Witness Gesture',
    titleMr: 'भूमीस्पर्शमुद्रा',
    taglineEn: 'Touching the Earth to Witness Truth',
    taglineMr: 'पृथ्वीला ज्ञानाची साक्षीदार मानणे',
    iconType: 'earth',
    image: null,
    mrParas: [
      'याचा शब्दश: अर्थ जमिनीला स्पर्श करणे असा असून, या मुद्रेत डावा हात ध्यानमुद्रेत असतो आणि उजवा हात जमिनीला स्पर्श करतो. गौतम बुद्ध ध्यानमुद्रेत असताना त्यांच्या ज्ञानाला आव्हान दिले गेले, असे सांगितले जाते. तेव्हा त्यांनी एका हाताने जमिनीला स्पर्श करून पृथ्वी ही आपल्या ज्ञानाची साक्षीदार आहे, असे दर्शविले. अशा प्रकारे त्यांनी ध्यानातील अडथळे आणि मोह दूर केले.'
    ],
    enParas: [
      'This gesture is literally called “touching the earth.” The Buddha moved his right hand from his position of meditation (now called the Dhyanamudra) and pointed down towards the earth itself to witness that he had resolved the problem of suffering. Thus, he turned away from temptation.'
    ],
    symbols: [
      {
        icon: '⏚',
        titleEn: 'Earth as Witness',
        titleMr: 'पृथ्वीची साक्ष',
        descEn: 'Touching the earth establishes steadfast truth and unshakeable inner grounding against doubt.',
        descMr: 'पृथ्वी ही आपल्या ज्ञानाची आणि अढळ सत्याची साक्षीदार आहे हे दर्शविणारा स्पर्श.'
      },
      {
        icon: '🛡',
        titleEn: 'Overcoming Temptation',
        titleMr: 'मोह आणि अडथळ्यांवर विजय',
        descEn: 'Buddha turned away from temptation, overcoming all obstacles and illusions during meditation.',
        descMr: 'ज्ञानाला आव्हान दिले गेले असता ध्यानातील सर्व अडथळे आणि मोह दूर केले.'
      },
      {
        icon: '△',
        titleEn: 'Left Hand in Dhyana',
        titleMr: 'डावा हात ध्यानात',
        descEn: 'The left hand remains resting peacefully in the lap in Dhyanamudra, maintaining inner stillness.',
        descMr: 'डावा हात ध्यानमुद्रेत शांत राहून आंतरिक स्थिरतेचे संतुलन राखतो.'
      }
    ],
    audioMr: 'भूमीस्पर्शमुद्रा. याचा शब्दश: अर्थ जमिनीला स्पर्श करणे असा आहे. गौतम बुद्धांच्या ज्ञानाला आव्हान दिले गेले असता त्यांनी पृथ्वीला आपल्या ज्ञानाची साक्षीदार मानून ध्यानातील सर्व अडथळे आणि मोह दूर केले.',
    audioEn: 'Bhoomisparshamudra, the Earth-Witness Gesture. Buddha pointed down towards the earth itself to witness his victory over temptation and resolution of suffering.'
  },
  {
    id: 'varadamudra',
    file: 'varadamudra.html',
    num: '06',
    titleEn: 'Varadamudra',
    titleEnFull: 'Varadamudra | Wish-Granting Gesture',
    titleMr: 'वरदमुद्रा',
    taglineEn: 'Charity, Compassion & Wish-Granting',
    taglineMr: 'औदार्य, करुणा आणि इच्छापूर्ती',
    iconType: 'boon',
    image: null,
    mrParas: [
      'या मुद्रेने औदार्य किंवा करुणेच्या भावनेतून पूर्ण केल्या जाणाऱ्या इच्छांचा निर्देश होतो. सर्वसाधारणपणे उजवा हात अभयमुद्रेत दर्शविला जातो, तेव्हा डाव्या हाताने ही वरदमुद्रा दर्शविली जाते. अवलोकितेश्वर या करुणाप्रधान बोधिसत्त्वांच्या मूर्तींमध्ये ही मुद्रा बऱ्याच वेळा पाहायला मिळते.'
    ],
    enParas: [
      'This gesture shows charity and the compassionate granting of wishes. It is usually made with the left hand, while the right hand makes a different mudra, often the "Calm-Down"/Abhayamudra vanquishing fear. The gesture is common in representations of Avalokiteshwara, a bodhisattva especially associated with compassion.'
    ],
    symbols: [
      {
        icon: '🤲',
        titleEn: 'Charity & Grace',
        titleMr: 'औदार्य व कृपा',
        descEn: 'Open downward palm signifies boundless generosity, forgiveness, and selfless granting of boons.',
        descMr: 'औदार्य किंवा करुणेच्या भावनेतून भक्तांच्या इच्छा पूर्ण करण्याचा निर्देश.'
      },
      {
        icon: '♥',
        titleEn: 'Avalokiteshwara',
        titleMr: 'अवलोकितेश्वर बोधिसत्त्व',
        descEn: 'Associated closely with Avalokiteshwara, the Bodhisattva of supreme, all-encompassing compassion.',
        descMr: 'करुणाप्रधान अवलोकितेश्वर बोधिसत्त्वांच्या मूर्तींमध्ये ही मुद्रा प्रामुख्याने आढळते.'
      },
      {
        icon: '⚖',
        titleEn: 'Balance with Abhaya',
        titleMr: 'अभय आणि वरद संगम',
        descEn: 'Often paired with Abhaya (calming fear) in the right hand and Varada (boon) in the left.',
        descMr: 'उजवा हात अभयमुद्रेत आणि डावा हात वरदमुद्रेत असा सुंदर समन्वय साधला जातो.'
      }
    ],
    audioMr: 'वरदमुद्रा. या मुद्रेने औदार्य किंवा करुणेच्या भावनेतून पूर्ण केल्या जाणाऱ्या इच्छांचा निर्देश होतो. अवलोकितेश्वर या करुणाप्रधान बोधिसत्त्वांच्या मूर्तींमध्ये ही मुद्रा प्रामुख्याने पाहायला मिळते.',
    audioEn: 'Varadamudra, the Wish-Granting Gesture. It signifies charity, boundless compassion, and the granting of wishes, associated with the compassionate Bodhisattva Avalokiteshwara.'
  },
  {
    id: 'kaaranamudra',
    file: 'kaaranamudra.html',
    num: '07',
    titleEn: 'Kaaranamudra',
    titleEnFull: 'Kaaranamudra | Demon-Quelling Gesture',
    titleMr: 'कारणमुद्रा',
    taglineEn: 'Subduing Negativity & Warding Off Obstacles',
    taglineMr: 'दानव, आजारपण व नकारात्मक विचारांवर मात',
    iconType: 'ward',
    image: null,
    mrParas: [
      'या मुद्रेने दानव, नकारात्मक विचार, आजारपण आणि सर्व प्रकारच्या नकारात्मक अडथळ्यांवर मात करण्याचा निर्देश होतो. या मुद्रेत हात वर उचलून मधली बोटे तळव्याच्या दिशेला मिटून बाकी बोटे सरळ ठेवली जातात. बौद्ध कलाविष्कारातील चित्रे आणि मूर्तींमध्ये जिथे जिथे दुष्ट शक्तींचे निर्दालन केले जाते, तिथे ही मुद्रा दर्शविलेली दिसते.'
    ],
    enParas: [
      'This gesture subdues negativity, including demons, negative thoughts, illness, and all other obstacles. It consists of holding up the hand, with the two middle fingers folded back into the palm and held by the thumb. In Buddhist art, it occurs in scenes of active conquest of demons.'
    ],
    symbols: [
      {
        icon: '🤘',
        titleEn: 'Demon Quelling',
        titleMr: 'दुष्ट शक्तींचे निर्दालन',
        descEn: 'Symbolizes powerful defense against psychic disharmony, ill-intent, and negative energies.',
        descMr: 'बौद्ध कलाविष्कारात जेथे जेथे दुष्ट शक्तींचे निर्दालन केले जाते तेथे ही मुद्रा आढळते.'
      },
      {
        icon: '🌿',
        titleEn: 'Dispersing Illness',
        titleMr: 'आजारपण निवारण',
        descEn: 'Clears pathogenic stagnation, mental distress, and negative thought loops.',
        descMr: 'नकारात्मक विचार, आजारपण आणि मानसिक तणावावर मात करण्यासाठी प्रभावी.'
      },
      {
        icon: '⚡',
        titleEn: 'Hand Alignment',
        titleMr: 'हस्त रचना',
        descEn: 'Hand held up with two middle fingers folded to palm and held gently by thumb, outer fingers erect.',
        descMr: 'मधली बोटे तळव्याच्या दिशेला मिटून अंगठ्याने पकडणे व बाकी बोटे सरळ ठेवणे.'
      }
    ],
    audioMr: 'कारणमुद्रा. या मुद्रेने दानव, नकारात्मक विचार, आजारपण आणि सर्व प्रकारच्या नकारात्मक अडथळ्यांवर मात करण्याचा निर्देश होतो. बौद्ध कलेत जिथे दुष्ट शक्तींचे निर्दालन केले जाते तिथे ही मुद्रा दर्शविली जाते.',
    audioEn: 'Kaaranamudra, the Demon-Quelling Gesture. This gesture subdues negativity, negative thoughts, illness, and all obstacles, representing active conquest over inner demons.'
  },
  {
    id: 'abhayamudra',
    file: 'abhayamudra.html',
    num: '08',
    titleEn: 'Abhayamudra',
    titleEnFull: 'Abhayamudra | Calming Gesture',
    titleMr: 'अभयमुद्रा',
    taglineEn: 'Conquest Over Fear & Divine Reassurance',
    taglineMr: 'भीती व द्वेष दूर करणे आणि साधकांसाठी संरक्षण',
    iconType: 'protect',
    image: null,
    mrParas: [
      'या मुद्रेने भीती आणि द्वेष दूर करण्याचा निर्देश होतो. या मुद्रेत गौतम बुद्ध आपला हात शांतपणे उचलतात. त्यातून सर्व अडथळे दूर होतात, असा अर्थ सूचित होतो. त्यामुळे ही मुद्रा म्हणजे साधकांसाठी संरक्षण, शांतता आणि सर्व प्रकारच्या भयापासून मुक्तीचे प्रतीक मानले जाते.'
    ],
    enParas: [
      'This gesture represents conquest over fear and hostility. The Buddha gently raises his hand, symbolizing the removal of obstacles. The mudra has come to represent protection and peace and the dissipation of all fear in the believers.'
    ],
    symbols: [
      {
        icon: '✋',
        titleEn: 'Removal of Fear',
        titleMr: 'निर्भयतेचे वरदान',
        descEn: 'Buddha gently raises his hand upright at chest/shoulder level, dispelling terror and apprehension.',
        descMr: 'गौतम बुद्ध शांतपणे हात वर उचलून साधकांना भीतीपासून मुक्ती देतात.'
      },
      {
        icon: '🕊',
        titleEn: 'Peace & Hostility Dispelled',
        titleMr: 'शांतता व द्वेष निवारण',
        descEn: 'Subdues external aggression, animosity, and internal anxieties, instilling calm confidence.',
        descMr: 'भीती आणि द्वेष दूर करून साधकांसाठी संरक्षण व शांततेची हमी देते.'
      },
      {
        icon: '🛡',
        titleEn: 'Universal Protection',
        titleMr: 'सर्वतोपरी संरक्षण',
        descEn: 'Stands as an eternal shield of serenity and spiritual security for all sincere seekers.',
        descMr: 'साधकांसाठी संरक्षण, शांतता आणि सर्व प्रकारच्या अडथळ्यांवर मात करण्याचे प्रतीक.'
      }
    ],
    audioMr: 'अभयमुद्रा. या मुद्रेने भीती आणि द्वेष दूर करण्याचा निर्देश होतो. या मुद्रेत गौतम बुद्ध आपला हात शांतपणे उचलतात, ज्यामुळे सर्व अडथळे दूर होऊन साधकांना संरक्षण, शांतता आणि भयापासून मुक्ती मिळते.',
    audioEn: 'Abhayamudra, the Calming Gesture. This gesture represents conquest over fear and hostility. The Buddha gently raises his hand, symbolizing protection, peace, and dissipation of all fear.'
  },
  {
    id: 'uttarabodhimudra',
    file: 'uttarabodhimudra.html',
    num: '09',
    titleEn: 'Uttarabodhimudra',
    titleEnFull: 'Uttarabodhimudra | Enlightenment Gesture',
    titleMr: 'उत्तरबोधी मुद्रा',
    taglineEn: 'Highest Enlightenment & Inner Light',
    taglineMr: 'ज्ञानप्राप्तीची सर्वोच्च स्थिती',
    iconType: 'supreme',
    image: null,
    mrParas: [
      'या मुद्रेने ज्ञानप्राप्तीच्या सर्वोच्च स्थितीचा निर्देश केला जातो. दोन्ही हातांची बोटे एकमेकांत जुळवून मिटली जातात आणि दोन्ही तर्जनी उघडलेल्या असतात. ही मुद्रा बहुधा वैरोचन बुद्धांच्या प्रतिमांमध्ये दिसून येते.'
    ],
    enParas: [
      'This gesture represents the highest enlightenment. The fingers of both hands are intertwined and only the index fingers are stretched out in this mudra. It is frequently seen in images of the Buddha Vairochana.'
    ],
    symbols: [
      {
        icon: '▲',
        titleEn: 'Index Fingers Raised',
        titleMr: 'उघडलेल्या तर्जनी',
        descEn: 'Intertwined fingers with index fingers joined pointing upward focus absolute cosmic enlightenment.',
        descMr: 'दोन्ही हातांची बोटे एकमेकांत गुंफून तर्जनी उघडून वर जोडल्या जातात.'
      },
      {
        icon: '☀️',
        titleEn: 'Buddha Vairochana',
        titleMr: 'वैरोचन बुद्ध',
        descEn: 'Characteristic of Vairochana, the primordial Buddha embodying cosmic wisdom and solar light.',
        descMr: 'ही मुद्रा बहुधा वैरोचन बुद्धांच्या प्रतिमांमध्ये दिसून येते.'
      },
      {
        icon: '✨',
        titleEn: 'Supreme Illumination',
        titleMr: 'ज्ञानप्राप्तीची सर्वोच्च स्थिती',
        descEn: 'Channels vital prana, dissolves illusion of duality, and anchors supreme awareness.',
        descMr: 'ज्ञानप्राप्ती आणि आत्मसाक्षात्काराची ही सर्वोच्च ध्यानमुद्रा मानली जाते.'
      }
    ],
    audioMr: 'उत्तरबोधी मुद्रा. या मुद्रेने ज्ञानप्राप्तीच्या सर्वोच्च स्थितीचा निर्देश केला जातो. दोन्ही हातांची बोटे एकमेकांत जुळवून मिटली जातात आणि दोन्ही तर्जनी उघडलेल्या असतात. ही मुद्रा बहुधा वैरोचन बुद्धांच्या प्रतिमांमध्ये दिसून येते.',
    audioEn: 'Uttarabodhimudra, the Enlightenment Gesture. Representing the highest enlightenment, the fingers of both hands are intertwined with index fingers stretched upward, frequently seen in Buddha Vairochana.'
  },
  {
    id: 'anjalimudra',
    file: 'anjalimudra.html',
    num: '10',
    titleEn: 'Anjalimudra',
    titleEnFull: 'Anjalimudra | Namaskaramudra | Reverence Gesture',
    titleMr: 'अंजलीमुद्रा | नमस्कारमुद्रा',
    taglineEn: 'Reverence, Salutation & Union of Realities',
    taglineMr: 'नमस्कार, आदर आणि लौकिक-पारलौकिक एकरूपत्व',
    iconType: 'namaste',
    image: null,
    mrParas: [
      'या मुद्रेने नमस्कार आणि आदराचा निर्देश केला जातो. मुखाच्या खालच्या बाजूला दोन हात जोडलेले असणे म्हणजे गुरूच्या शब्दांप्रती आदर दर्शविणे, असेही मानले जाते. जोडलेल्या दोन हातांनी लौकिक आणि पारलौकिक, तसेच स्थिर आणि गतिशील अशा जगाचे एकरूपत्व दर्शविले जाते.'
    ],
    enParas: [
      'This gesture indicates reverence and salutation. The two palms pressed together in front of the chest are meant to indicate homage to the words of a teacher.',
      'The two hands placed together indicate the union of the spiritual and material, the static and the dynamic.'
    ],
    symbols: [
      {
        icon: '🙏',
        titleEn: 'Homage to Teacher',
        titleMr: 'गुरूंप्रती आदर',
        descEn: 'Palms joined in front of chest show heartfelt reverence, humility, and homage to wisdom.',
        descMr: 'मुखाच्या खालच्या बाजूला दोन हात जोडणे म्हणजे गुरूच्या शब्दांप्रती सखोल आदर दर्शविणे.'
      },
      {
        icon: '☯',
        titleEn: 'Union of Spiritual & Material',
        titleMr: 'लौकिक आणि पारलौकिक एकरूपत्व',
        descEn: 'Unites inner spirit with external world, joining individual awareness to cosmic truth.',
        descMr: 'जोडलेल्या दोन हातांनी लौकिक आणि पारलौकिक विश्वाचे एकरूपत्व दर्शविले जाते.'
      },
      {
        icon: '⚡',
        titleEn: 'Static & Dynamic Harmony',
        titleMr: 'स्थिर आणि गतिशील समन्वय',
        descEn: 'Harmonizes stillness and movement, balancing the left and right energies within consciousness.',
        descMr: 'स्थिर आणि गतिशील अशा जगातील चैतन्य एकरूप करून आंतरिक शांतता निर्माण करते.'
      }
    ],
    audioMr: 'अंजलीमुद्रा, नमस्कारमुद्रा. या मुद्रेने नमस्कार आणि आदराचा निर्देश केला जातो. मुखाच्या खालच्या बाजूला दोन हात जोडलेले असणे म्हणजे गुरूच्या शब्दांप्रती आदर दर्शविणे. जोडलेल्या हातांनी लौकिक आणि पारलौकिक जगाचे एकरूपत्व दर्शविले जाते.',
    audioEn: 'Anjalimudra or Namaskaramudra, the Reverence Gesture. Indicates reverence, salutation, and homage to the teacher, while uniting the spiritual and material, the static and dynamic.'
  }
];

export function getMudraSVG(type, size = 64) {
  switch(type) {
    case "wheel":
      return `<svg viewBox="0 0 64 64" width="${size}" height="${size}"><circle cx="32" cy="32" r="22" fill="none" stroke="currentColor" stroke-width="2.2"/><circle cx="32" cy="32" r="6" fill="none" stroke="currentColor" stroke-width="2.2"/><path d="M32 10v16M32 38v16M10 32h16M38 32h16M16 16l11 11M37 37l11 11M16 48l11-11M37 27l11-11" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"/></svg>`;
    case "meditate":
      return `<svg viewBox="0 0 64 64" width="${size}" height="${size}"><path d="M14 42c6 6 12 8 18 8s12-2 18-8" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"/><path d="M22 36c4 3 6 4 10 4s6-1 10-4" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"/><circle cx="32" cy="20" r="8" fill="none" stroke="currentColor" stroke-width="2.2"/><path d="M32 28v12" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"/></svg>`;
    case "earth":
      return `<svg viewBox="0 0 64 64" width="${size}" height="${size}"><path d="M20 20v24l12 8 12-8V20" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/><path d="M32 10v42" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"/><path d="M12 52h40" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"/></svg>`;
    case "boon":
      return `<svg viewBox="0 0 64 64" width="${size}" height="${size}"><path d="M32 14v36M22 38l10 12 10-12" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/><circle cx="32" cy="24" r="14" fill="none" stroke="currentColor" stroke-width="2.2"/></svg>`;
    case "ward":
      return `<svg viewBox="0 0 64 64" width="${size}" height="${size}"><path d="M22 14v22M42 14v22M22 36c0 8 4 14 10 14s10-6 10-14" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"/><path d="M28 32h8" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"/></svg>`;
    case "wisdom":
      return `<svg viewBox="0 0 64 64" width="${size}" height="${size}"><polygon points="32,10 42,26 32,54 22,26" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linejoin="round"/><circle cx="32" cy="30" r="4" fill="none" stroke="currentColor" stroke-width="2.2"/></svg>`;
    case "protect":
      return `<svg viewBox="0 0 64 64" width="${size}" height="${size}"><path d="M20 48V20c0-4 4-6 8-6h8c4 0 8 2 8 6v28" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"/><path d="M24 48h16" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"/><path d="M28 20v14M36 20v14" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"/></svg>`;
    case "supreme":
      return `<svg viewBox="0 0 64 64" width="${size}" height="${size}"><path d="M32 10l8 18-8 8-8-8 8-18z" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linejoin="round"/><path d="M20 46c4-4 8-6 12-6s8 2 12 6" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"/><path d="M32 36v18" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"/></svg>`;
    case "namaste":
      return `<svg viewBox="0 0 64 64" width="${size}" height="${size}"><path d="M32 12c-4 10-8 18-8 28 0 8 4 12 8 12s8-4 8-12c0-10-4-18-8-28z" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linejoin="round"/><path d="M32 12v40" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"/></svg>`;
    case "vitarka":
    default:
      return `<svg viewBox="0 0 64 64" width="${size}" height="${size}"><circle cx="28" cy="28" r="14" fill="none" stroke="currentColor" stroke-width="2.2"/><path d="M28 14c8-3 18 2 18 12v18" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"/><path d="M38 44v8M44 44v8M32 42v10" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"/></svg>`;
  }
}
