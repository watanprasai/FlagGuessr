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
    const typingContainer = document.getElementById('typing-container');
   
    const submitAnswerButton = document.getElementById('submit-answer');
    const feedbackText = document.getElementById('feedback');
    const nextButton = document.getElementById('next-button');
    const modeRadios = document.querySelectorAll('input[name="mode"]');

    const typingInput = document.getElementById('typing-answer');
    const autocompleteResults = document.getElementById('autocomplete-results'); // เพิ่มตัวแปรนี้
    
    const streakIcon = document.getElementById('streak-icon');
    const streakCounter = document.getElementById('streak-counter');
    let winStreak = 0; 

    let correctAnswer = null;
    let currentMode = 'choice';

    const bgMusic = document.getElementById('bg-music');
    const correctSound = document.getElementById('correct-sound');
    const incorrectSound = document.getElementById('incorrect-sound');

    const muteButton = document.getElementById('mute-button');
    const volumeSlider = document.getElementById('volume-slider');
    const startScreen = document.getElementById('start-screen');
    const startGameButton = document.getElementById('start-game-button');
    const gameContainer = document.getElementById('game-container');
    let lastVolume = 0.5;

     typingInput.addEventListener('input', () => {
        const query = typingInput.value.toLowerCase();
        autocompleteResults.innerHTML = ''; // เคลียร์ผลลัพธ์เก่าทุกครั้งที่พิมพ์

        if (query.length === 0) {
            autocompleteResults.style.display = 'none';
            return;
        }

        // กรองรายชื่อประเทศที่ตรงกับที่พิมพ์
        const filteredCountries = countries.filter(country => 
            country.name.toLowerCase().includes(query)
        );

        if (filteredCountries.length > 0) {
            autocompleteResults.style.display = 'block'; // แสดงกล่องผลลัพธ์
            filteredCountries.forEach(country => {
                const resultDiv = document.createElement('div');
                resultDiv.textContent = country.name;

                // เมื่อคลิกที่รายชื่อใน Dropdown
                resultDiv.addEventListener('click', () => {
                    typingInput.value = country.name; // ใส่ชื่อประเทศในช่อง input
                    autocompleteResults.innerHTML = ''; // เคลียร์ผลลัพธ์
                    autocompleteResults.style.display = 'none'; // ซ่อนกล่อง
                });
                autocompleteResults.appendChild(resultDiv);
            });
        } else {
            autocompleteResults.style.display = 'none'; // ถ้าไม่เจอให้ซ่อน
        }
    });

    // ปิด Dropdown เมื่อผู้ใช้คลิกที่อื่น
    document.addEventListener('click', (e) => {
        // เช็คว่าไม่ได้คลิกที่ input หรือที่กล่องผลลัพธ์
        if (e.target !== typingInput && e.target !== autocompleteResults) {
            autocompleteResults.style.display = 'none';
        }
    });
    
    // --- สิ้นสุดตรรกะสำหรับ Autocomplete ---


    // ... (ฟังก์ชันและ Event Listener อื่นๆ ทั้งหมดเหมือนเดิม) ...
    
    // แก้ไขฟังก์ชัน displayNewQuestion เล็กน้อย
    function displayNewQuestion() {
        feedbackText.textContent = '';
        feedbackText.className = '';
        optionsContainer.innerHTML = '';
        typingInput.value = '';
        autocompleteResults.style.display = 'none'; // เพิ่มบรรทัดนี้เพื่อซ่อน dropdown เมื่อเริ่มข้อใหม่

        const correctCountryIndex = Math.floor(Math.random() * countries.length);
        // ... (โค้ดส่วนที่เหลือในฟังก์ชันเหมือนเดิม) ...
    }

    function updateMuteButton() {
        if (bgMusic.muted || bgMusic.volume === 0) {
            muteButton.textContent = '🔇'; // แสดงไอคอนปิดเสียง
        } else {
            muteButton.textContent = '🔊'; // แสดงไอคอนเปิดเสียง
        }
    }

    // 1. เมื่อเลื่อนแถบปรับเสียง
    volumeSlider.addEventListener('input', (e) => {
        const newVolume = parseFloat(e.target.value);
        bgMusic.volume = newVolume;
        
        // ถ้าเลื่อนเสียงจาก 0 ให้ Unmute อัตโนมัติ
        if (newVolume > 0 && bgMusic.muted) {
            bgMusic.muted = false;
        }
        
        // ถ้าเลื่อนเสียงไปที่ 0 ให้ Mute อัตโนมัติ
        if (newVolume === 0) {
            bgMusic.muted = true;
        }

        updateMuteButton();
    });

    // 2. เมื่อกดปุ่ม Mute
    muteButton.addEventListener('click', () => {
        if (bgMusic.muted) {
            // ถ้ากำลังปิดเสียงอยู่ ให้เปิดเสียง
            bgMusic.muted = false;
            bgMusic.volume = lastVolume; // กลับไปใช้เสียงล่าสุดที่เคยตั้งไว้
            volumeSlider.value = lastVolume;
        } else {
            // ถ้าเสียงเปิดอยู่ ให้ปิดเสียง
            lastVolume = bgMusic.volume; // จำค่าความดังปัจจุบันไว้
            bgMusic.muted = true;
            volumeSlider.value = 0; // ตั้งแถบเลื่อนเป็น 0
        }
        updateMuteButton();
    });

    // --- แก้ไข Event Listener ของปุ่มเริ่มเกม ---
    startGameButton.addEventListener('click', () => {
        startScreen.style.display = 'none';
        gameContainer.hidden = false;       

        bgMusic.play().catch(error => {
            console.log("การเล่นเพลงอัตโนมัติถูกเบราว์เซอร์บล็อก:", error);
        });
        
        // ตั้งค่าเสียงเริ่มต้น
        bgMusic.volume = 0.5;
        volumeSlider.value = 0.5;
        lastVolume = 0.5;
        updateMuteButton(); // อัปเดตไอคอนปุ่มให้ถูกต้องตั้งแต่เริ่ม

        displayNewQuestion();
    });

    function shuffleArray(array) {
        // สลับลำดับข้อมูลใน Array แบบสุ่ม
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }

    function displayNewQuestion() {
        feedbackText.textContent = '';
        feedbackText.className = '';
        optionsContainer.innerHTML = '';
        typingInput.value = '';

        const correctCountryIndex = Math.floor(Math.random() * countries.length);
        correctAnswer = countries[correctCountryIndex];

        flagImage.src = `https://flagcdn.com/w320/${correctAnswer.code}.png`;
        flagImage.alt = `ธงชาติ ${correctAnswer.name}`;

        if (currentMode === 'choice') {
            const options = [correctAnswer];
            const usedIndexes = [correctCountryIndex];
            while (options.length < 4) {
                const randomIndex = Math.floor(Math.random() * countries.length);
                if (!usedIndexes.includes(randomIndex)) {
                    usedIndexes.push(randomIndex);
                    options.push(countries[randomIndex]);
                }
            }
            shuffleArray(options);
            options.forEach(option => {
                const button = document.createElement('button');
                button.textContent = option.name;
                button.className = 'option-button';
                button.onclick = () => checkAnswer(option.name);
                optionsContainer.appendChild(button);
            });
        }

        optionsContainer.style.display = currentMode === 'choice' ? 'grid' : 'none';
        typingContainer.style.display = currentMode === 'typing' ? 'flex' : 'none';
    }

     function updateStreakDisplay() {
        streakCounter.textContent = `Win Streak: ${winStreak}`;

        let icon = '';
        let lastIcon = streakIcon.textContent;

        // กำหนดไอคอนตามระดับของ Win Streak
        if (winStreak >= 15) {
            icon = '👑'; // เทพเจ้าแห่งธงชาติ!
        } else if (winStreak >= 10) {
            icon = '🔥'; // ร้อนแรง!
        } else if (winStreak >= 5) {
            icon = '🏆'; // แชมเปี้ยน!
        } else if (winStreak >= 3) {
            icon = '⭐'; // เริ่มมาดี!
        }

        streakIcon.textContent = icon;

        // เพิ่ม Animation ถ้าไอคอนมีการเปลี่ยนแปลง
        if (icon && icon !== lastIcon) {
            streakIcon.classList.add('pop-in');
            // ลบคลาสออกหลัง Animation จบ เพื่อให้สามารถเล่นซ้ำได้
            setTimeout(() => {
                streakIcon.classList.remove('pop-in');
            }, 400);
        }
    }

    // --- แก้ไขฟังก์ชัน checkAnswer() ---
    function checkAnswer(selectedName) {
        console.log("teseeet")
        const buttons = optionsContainer.querySelectorAll('.option-button');
        buttons.forEach(button => button.disabled = true);
        submitAnswerButton.disabled = true;
        typingInput.disabled = true;

        if (selectedName.trim() === correctAnswer.name) {
            // --- เมื่อตอบถูก ---
            feedbackText.textContent = 'ถูกต้องครับ!';
            feedbackText.className = 'correct';
            correctSound.currentTime = 0;
            correctSound.play();
            winStreak++; // เพิ่มค่า Win Streak
        } else {
            // --- เมื่อตอบผิด ---
            feedbackText.textContent = `ผิดครับ! คำตอบที่ถูกต้องคือ ${correctAnswer.name}`;
            feedbackText.className = 'incorrect';
            incorrectSound.currentTime = 0;
            incorrectSound.play();
            winStreak = 0; // รีเซ็ต Win Streak เป็น 0
        }
        
        // อัปเดตการแสดงผล Win Streak ทุกครั้งหลังตอบ
        updateStreakDisplay();
    }

    // ฟังก์ชันสำหรับเริ่มคำถามใหม่ (มีการปรับปรุงเล็กน้อย)
    function nextQuestion() {
        // เปิดการใช้งานปุ่มและ input อีกครั้ง
        const buttons = optionsContainer.querySelectorAll('.option-button');
        buttons.forEach(button => button.disabled = false);
        submitAnswerButton.disabled = false;
        typingInput.disabled = false;
        displayNewQuestion();
    }


    // // ตอบจากช่องพิมพ์
    // submitAnswerButton.addEventListener('click', () => {
    //     checkAnswer(typingInput.value);
    // });

    // เปลี่ยนโหมด
    modeRadios.forEach(radio => {
        radio.addEventListener('change', (e) => {   
            currentMode = e.target.value;
            displayNewQuestion();
        });
    });

     // --- ส่วนที่แก้ไขและเพิ่มใหม่ ---

    // 1. จัดการการเริ่มเกมเมื่อกดปุ่ม
    startGameButton.addEventListener('click', () => {
        startScreen.style.display = 'none'; // ซ่อนหน้าจอเริ่มต้น
        gameContainer.hidden = false;       // แสดงหน้าจอเกม
        
        // เล่นเพลงพื้นหลัง (ใช้ .play() เนื่องจาก promise อาจถูก reject ถ้าผู้ใช้ยังไม่กดอะไรเลย)
        bgMusic.play().catch(error => {
            console.log("การเล่นเพลงอัตโนมัติถูกเบราว์เซอร์บล็อก:", error);
            // อาจจะแสดงปุ่มให้ผู้ใช้กดเปิดเสียงเอง
        });

        // เริ่มคำถามแรก
        displayNewQuestion();
    });

    // 2. ปรับ Event Listener ของปุ่ม "ธงถัดไป" และปุ่มส่งคำตอบ
    submitAnswerButton.addEventListener('click', () => {
        checkAnswer(typingInput.value);
    });

    nextButton.addEventListener('click', nextQuestion); // ใช้ฟังก์ชัน nextQuestion ที่สร้างใหม่

    // จัดการการเปลี่ยนโหมด
    modeRadios.forEach(radio => {
        radio.addEventListener('change', (e) => {
            currentMode = e.target.value;
            nextQuestion(); // เรียก nextQuestion เพื่อรีเซ็ตสถานะและแสดงคำถามใหม่
        });
    });

    // 3. ลบการเรียก displayNewQuestion() ตรงนี้ออก
    // displayNewQuestion(); // <--- ลบบรรทัดนี้

    // เมื่อกดปุ่ม "ธงถัดไป" ให้แสดงคำถามใหม่
    nextButton.addEventListener('click', displayNewQuestion);

    // เริ่มเกมครั้งแรกเมื่อหน้าเว็บโหลดเสร็จ
    displayNewQuestion();
});