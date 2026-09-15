// ==============================
// STEP 1 → STEP 2
// ==============================

function goStep2() {

    document.getElementById("step1").classList.add("hidden");

    document.getElementById("step2").classList.remove("hidden");

}



// ==============================
// STEP 2 → STEP 3
// ==============================

function goStep3() {

    document.getElementById("step2").classList.add("hidden");

    document.getElementById("step3").classList.remove("hidden");

}



// ==============================
// NO BUTTON
// ==============================

let noClicks = 0;

function noClick() {

    noClicks++;

    const noBtn = document.getElementById("noBtn");

    const hint = document.getElementById("hint");


    // စာပြောင်းမယ်

    const messages = [

        "ဟေး... တကယ်ကြီး မတွဲဘူးလား 🥹",

        "တစ်ခါလောက် ထပ်စဉ်းစားပေးပါနော် 💗",

        "မတွဲဘူးဆိုရင် မောင်ငိုမှာနော်  😭",

        "Button လေးတောင် ပုန်းနေပြီ 🥺",

        "အိုကေ... နောက်ဆုံးတစ်ခါပဲ 🥹💗"

    ];


    hint.textContent =
        messages[
            Math.min(
                noClicks - 1,
                messages.length - 1
            )
        ];


    // Random နေရာရွှေ့မယ်

    const x =
        Math.floor(
            Math.random() * 220
        ) - 110;

    const y =
        Math.floor(
            Math.random() * 120
        ) - 60;


    // တဖြည်းဖြည်းသေးမယ်

    const scale =
        Math.max(
            0.15,
            1 - (noClicks * 0.17)
        );


    noBtn.style.transform =
        `translate(${x}px, ${y}px)
         scale(${scale})`;


    // 5 ခါနှိပ်ရင် ပျောက်မယ်

    if (noClicks >= 5) {

        noBtn.style.opacity = "0";

        noBtn.style.pointerEvents = "none";

        noBtn.style.transform =
            "scale(0)";

        hint.textContent =
            "ပျောက်သွားပြီ  hee😁";
    }

}



// ==============================
// FINAL
// ==============================

function finalAnswer() {

    alert(
        "🥹❤️ Thank you for giving us another chance!"
    );

}
