document.addEventListener('DOMContentLoaded', () => {
    // รายชื่อประเทศทั้งหมดพร้อมรหัสประเทศ 2 ตัวอักษร (ISO 3166-1 alpha-2)
    // ข้อมูลนี้ใช้สำหรับดึงรูปภาพธงจาก https://flagcdn.com/
    const countries = [
        { name: 'อัฟกานิสถาน', code: 'af' },
        { name: 'แอลเบเนีย', code: 'al' },
        { name: 'แอลจีเรีย', code: 'dz' },
        { name: 'อันดอร์รา', code: 'ad' },
        { name: 'แองโกลา', code: 'ao' },
        { name: 'แอนติกาและบาร์บูดา', code: 'ag' },
        { name: 'อาร์เจนตินา', code: 'ar' },
        { name: 'อาร์เมเนีย', code: 'am' },
        { name: 'ออสเตรเลีย', code: 'au' },
        { name: 'ออสเตรีย', code: 'at' },
        { name: 'อาเซอร์ไบจาน', code: 'az' },
        { name: 'บาฮามาส', code: 'bs' },
        { name: 'บาห์เรน', code: 'bh' },
        { name: 'บังกลาเทศ', code: 'bd' },
        { name: 'บาร์เบโดส', code: 'bb' },
        { name: 'เบลารุส', code: 'by' },
        { name: 'เบลเยียม', code: 'be' },
        { name: 'เบลีซ', code: 'bz' },
        { name: 'เบนิน', code: 'bj' },
        { name: 'ภูฏาน', code: 'bt' },
        { name: 'โบลิเวีย', code: 'bo' },
        { name: 'บอสเนียและเฮอร์เซโกวีนา', code: 'ba' },
        { name: 'บอตสวานา', code: 'bw' },
        { name: 'บราซิล', code: 'br' },
        { name: 'บรูไน', code: 'bn' },
        { name: 'บัลแกเรีย', code: 'bg' },
        { name: 'บูร์กินาฟาโซ', code: 'bf' },
        { name: 'บุรุนดี', code: 'bi' },
        { name: 'กัมพูชา', code: 'kh' },
        { name: 'แคเมอรูน', code: 'cm' },
        { name: 'แคนาดา', code: 'ca' },
        { name: 'กาบูเวร์ดี', code: 'cv' },
        { name: 'สาธารณรัฐแอฟริกากลาง', code: 'cf' },
        { name: 'ชาด', code: 'td' },
        { name: 'ชิลี', code: 'cl' },
        { name: 'จีน', code: 'cn' },
        { name: 'โคลอมเบีย', code: 'co' },
        { name: 'คอโมโรส', code: 'km' },
        { name: 'สาธารณรัฐคองโก', code: 'cg' },
        { name: 'สาธารณรัฐประชาธิปไตยคองโก', code: 'cd' },
        { name: 'คอสตาริกา', code: 'cr' },
        { name: 'โครเอเชีย', code: 'hr' },
        { name: 'คิวบา', code: 'cu' },
        { name: 'ไซปรัส', code: 'cy' },
        { name: 'เช็กเกีย', code: 'cz' },
        { name: 'เดนมาร์ก', code: 'dk' },
        { name: 'จิบูตี', code: 'dj' },
        { name: 'ดอมินีกา', code: 'dm' },
        { name: 'สาธารณรัฐโดมินิกัน', code: 'do' },
        { name: 'ติมอร์-เลสเต', code: 'tl' },
        { name: 'เอกวาดอร์', code: 'ec' },
        { name: 'อียิปต์', code: 'eg' },
        { name: 'เอลซัลวาดอร์', code: 'sv' },
        { name: 'อิเควทอเรียลกินี', code: 'gq' },
        { name: 'เอริเทรีย', code: 'er' },
        { name: 'เอสโตเนีย', code: 'ee' },
        { name: 'เอสวาตินี', code: 'sz' },
        { name: 'เอธิโอเปีย', code: 'et' },
        { name: 'ฟิจิ', code: 'fj' },
        { name: 'ฟินแลนด์', code: 'fi' },
        { name: 'ฝรั่งเศส', code: 'fr' },
        { name: 'กาบอง', code: 'ga' },
        { name: 'แกมเบีย', code: 'gm' },
        { name: 'จอร์เจีย', code: 'ge' },
        { name: 'เยอรมนี', code: 'de' },
        { name: 'กานา', code: 'gh' },
        { name: 'กรีซ', code: 'gr' },
        { name: 'เกรเนดา', code: 'gd' },
        { name: 'กัวเตมาลา', code: 'gt' },
        { name: 'กินี', code: 'gn' },
        { name: 'กินี-บิสเซา', code: 'gw' },
        { name: 'กายอานา', code: 'gy' },
        { name: 'เฮติ', code: 'ht' },
        { name: 'ฮอนดูรัส', code: 'hn' },
        { name: 'ฮังการี', code: 'hu' },
        { name: 'ไอซ์แลนด์', code: 'is' },
        { name: 'อินเดีย', code: 'in' },
        { name: 'อินโดนีเซีย', code: 'id' },
        { name: 'อิหร่าน', code: 'ir' },
        { name: 'อิรัก', code: 'iq' },
        { name: 'ไอร์แลนด์', code: 'ie' },
        { name: 'อิสราเอล', code: 'il' },
        { name: 'อิตาลี', code: 'it' },
        { name: 'โกตดิวัวร์', code: 'ci' },
        { name: 'จาเมกา', code: 'jm' },
        { name: 'ญี่ปุ่น', code: 'jp' },
        { name: 'จอร์แดน', code: 'jo' },
        { name: 'คาซัคสถาน', code: 'kz' },
        { name: 'เคนยา', code: 'ke' },
        { name: 'คิริบาส', code: 'ki' },
        { name: 'คูเวต', code: 'kw' },
        { name: 'คีร์กีซสถาน', code: 'kg' },
        { name: 'ลาว', code: 'la' },
        { name: 'ลัตเวีย', code: 'lv' },
        { name: 'เลบานอน', code: 'lb' },
        { name: 'เลโซโท', code: 'ls' },
        { name: 'ไลบีเรีย', code: 'lr' },
        { name: 'ลิเบีย', code: 'ly' },
        { name: 'ลีชเทินชไตน์', code: 'li' },
        { name: 'ลิทัวเนีย', code: 'lt' },
        { name: 'ลักเซมเบิร์ก', code: 'lu' },
        { name: 'มาดากัสการ์', code: 'mg' },
        { name: 'มาลาวี', code: 'mw' },
        { name: 'มาเลเซีย', code: 'my' },
        { name: 'มัลดีฟส์', code: 'mv' },
        { name: 'มาลี', code: 'ml' },
        { name: 'มอลตา', code: 'mt' },
        { name: 'หมู่เกาะมาร์แชลล์', code: 'mh' },
        { name: 'มอริเตเนีย', code: 'mr' },
        { name: 'มอริเชียส', code: 'mu' },
        { name: 'เม็กซิโก', code: 'mx' },
        { name: 'ไมโครนีเชีย', code: 'fm' },
        { name: 'มอลโดวา', code: 'md' },
        { name: 'โมนาโก', code: 'mc' },
        { name: 'มองโกเลีย', code: 'mn' },
        { name: 'มอนเตเนโกร', code: 'me' },
        { name: 'โมร็อกโก', code: 'ma' },
        { name: 'โมซัมบิก', code: 'mz' },
        { name: 'เมียนมา', code: 'mm' },
        { name: 'นามิเบีย', code: 'na' },
        { name: 'นาอูรู', code: 'nr' },
        { name: 'เนปาล', code: 'np' },
        { name: 'เนเธอร์แลนด์', code: 'nl' },
        { name: 'นิวซีแลนด์', code: 'nz' },
        { name: 'นิการากัว', code: 'ni' },
        { name: 'ไนเจอร์', code: 'ne' },
        { name: 'ไนจีเรีย', code: 'ng' },
        { name: 'เกาหลีเหนือ', code: 'kp' },
        { name: 'มาซิโดเนียเหนือ', code: 'mk' },
        { name: 'นอร์เวย์', code: 'no' },
        { name: 'โอมาน', code: 'om' },
        { name: 'ปากีสถาน', code: 'pk' },
        { name: 'ปาเลา', code: 'pw' },
        { name: 'ปาเลสไตน์', code: 'ps' },
        { name: 'ปานามา', code: 'pa' },
        { name: 'ปาปัวนิวกินี', code: 'pg' },
        { name: 'ปารากวัย', code: 'py' },
        { name: 'เปรู', code: 'pe' },
        { name: 'ฟิลิปปินส์', code: 'ph' },
        { name: 'โปแลนด์', code: 'pl' },
        { name: 'โปรตุเกส', code: 'pt' },
        { name: 'กาตาร์', code: 'qa' },
        { name: 'โรมาเนีย', code: 'ro' },
        { name: 'รัสเซีย', code: 'ru' },
        { name: 'รวันดา', code: 'rw' },
        { name: 'เซนต์คิตส์และเนวิส', code: 'kn' },
        { name: 'เซนต์ลูเชีย', code: 'lc' },
        { name: 'เซนต์วินเซนต์และเกรนาดีนส์', code: 'vc' },
        { name: 'ซามัว', code: 'ws' },
        { name: 'ซานมารีโน', code: 'sm' },
        { name: 'เซาตูเมและปรินซีปี', code: 'st' },
        { name: 'ซาอุดีอาระเบีย', code: 'sa' },
        { name: 'เซเนกัล', code: 'sn' },
        { name: 'เซอร์เบีย', code: 'rs' },
        { name: 'เซเชลส์', code: 'sc' },
        { name: 'เซียร์ราลีโอน', code: 'sl' },
        { name: 'สิงคโปร์', code: 'sg' },
        { name: 'สโลวาเกีย', code: 'sk' },
        { name: 'สโลวีเนีย', code: 'si' },
        { name: 'หมู่เกาะโซโลมอน', code: 'sb' },
        { name: 'โซมาเลีย', code: 'so' },
        { name: 'แอฟริกาใต้', code: 'za' },
        { name: 'เกาหลีใต้', code: 'kr' },
        { name: 'ซูดานใต้', code: 'ss' },
        { name: 'สเปน', code: 'es' },
        { name: 'ศรีลังกา', code: 'lk' },
        { name: 'ซูดาน', code: 'sd' },
        { name: 'ซูรินาม', code: 'sr' },
        { name: 'สวีเดน', code: 'se' },
        { name: 'สวิตเซอร์แลนด์', code: 'ch' },
        { name: 'ซีเรีย', code: 'sy' },
        { name: 'ไต้หวัน', code: 'tw' },
        { name: 'ทาจิกิสถาน', code: 'tj' },
        { name: 'แทนซาเนีย', code: 'tz' },
        { name: 'ไทย', code: 'th' },
        { name: 'โตโก', code: 'tg' },
        { name: 'ตองกา', code: 'to' },
        { name: 'ตรินิแดดและโตเบโก', code: 'tt' },
        { name: 'ตูนิเซีย', code: 'tn' },
        { name: 'ตุรกี', code: 'tr' },
        { name: 'เติร์กเมนิสถาน', code: 'tm' },
        { name: 'ตูวาลู', code: 'tv' },
        { name: 'ยูกันดา', code: 'ug' },
        { name: 'ยูเครน', code: 'ua' },
        { name: 'สหรัฐอาหรับเอมิเรตส์', code: 'ae' },
        { name: 'สหราชอาณาจักร', code: 'gb' },
        { name: 'สหรัฐอเมริกา', code: 'us' },
        { name: 'อุรุกวัย', code: 'uy' },
        { name: 'อุซเบกิสถาน', code: 'uz' },
        { name: 'วานูวาตู', code: 'vu' },
        { name: 'นครรัฐวาติกัน', code: 'va' },
        { name: 'เวเนซุเอลา', code: 've' },
        { name: 'เวียดนาม', code: 'vn' },
        { name: 'เยเมน', code: 'ye' },
        { name: 'แซมเบีย', code: 'zm' },
        { name: 'ซิมบับเว', code: 'zw' }
    ];

    const flagImage = document.getElementById('flag-image');
    const optionsContainer = document.getElementById('options-container');
    const feedbackText = document.getElementById('feedback');
    const nextButton = document.getElementById('next-button');

    let correctAnswer = null;

    function shuffleArray(array) {
        // สลับลำดับข้อมูลใน Array แบบสุ่ม
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }

    function displayNewQuestion() {
        // รีเซ็ตสถานะ
        feedbackText.textContent = '';
        feedbackText.className = '';
        optionsContainer.innerHTML = '';

        // 1. สุ่มประเทศที่เป็นคำตอบที่ถูกต้อง
        const correctCountryIndex = Math.floor(Math.random() * countries.length);
        correctAnswer = countries[correctCountryIndex];

        // 2. สร้างลิสต์ตัวเลือก (รวมคำตอบที่ถูก)
        const options = [correctAnswer];
        const usedIndexes = [correctCountryIndex];

        // 3. สุ่มตัวเลือกที่ไม่ถูกต้องอีก 3 ตัว
        while (options.length < 4) {
            const randomIndex = Math.floor(Math.random() * countries.length);
            if (!usedIndexes.includes(randomIndex)) {
                usedIndexes.push(randomIndex);
                options.push(countries[randomIndex]);
            }
        }
        
        // 4. สลับลำดับตัวเลือก
        shuffleArray(options);

        // 5. แสดงธงชาติและสร้างปุ่มตัวเลือก
        flagImage.src = `https://flagcdn.com/w320/${correctAnswer.code}.png`;
        flagImage.alt = `ธงชาติ ${correctAnswer.name}`;

        options.forEach(option => {
            const button = document.createElement('button');
            button.textContent = option.name;
            button.className = 'option-button';
            button.onclick = () => checkAnswer(option.name);
            optionsContainer.appendChild(button);
        });
    }

    function checkAnswer(selectedName) {
        // ปิดการใช้งานปุ่มทั้งหมดหลังจากเลือกคำตอบ
        const buttons = optionsContainer.querySelectorAll('.option-button');
        buttons.forEach(button => {
            button.disabled = true;
        });

        // ตรวจสอบคำตอบและแสดงผล
        if (selectedName === correctAnswer.name) {
            feedbackText.textContent = 'ถูกต้องครับ!';
            feedbackText.className = 'correct';
        } else {
            feedbackText.textContent = `ผิดครับ! คำตอบที่ถูกต้องคือ ${correctAnswer.name}`;
            feedbackText.className = 'incorrect';
        }
    }

    // เมื่อกดปุ่ม "ธงถัดไป" ให้แสดงคำถามใหม่
    nextButton.addEventListener('click', displayNewQuestion);

    // เริ่มเกมครั้งแรกเมื่อหน้าเว็บโหลดเสร็จ
    displayNewQuestion();
});