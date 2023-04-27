import React from "react";
import "../styles/Info.css"

function Info() {
    return (
        <div className="info-page">
            <h1 className="info-header" onMouseEnter={() => {
                const infoText = document.getElementById("what-is-menstruation");
                infoText.style.visibility = "visible";
            }} onMouseLeave={() => {
                const infoText = document.getElementById("what-is-menstruation");
                infoText.style.visibility = "hidden";
            }}>
                What is menstruation?
            </h1>
            <text id="what-is-menstruation" className="info-text">
                Menstruation is a woman’s monthly bleeding, often called your “period.” When you menstruate, your body discards the monthly buildup of the lining of your uterus (womb). <br/>
                Menstrual blood and tissue flow from your uterus through the small opening in your cervix and pass out of your body through your vagina. <br/>
                During the monthly menstrual cycle, the uterus lining builds up to prepare for pregnancy. <br/>
                If you do not get pregnant, estrogen and progesterone hormone levels begin falling. Very low levels of estrogen and progesterone tell your body to begin menstruation.
            </text>
            <h1 className="info-header" onMouseEnter={() => {
                const infoText = document.getElementById("what-is-menstrual-cycle");
                infoText.style.visibility = "visible";
            }} onMouseLeave={() => {
                const infoText = document.getElementById("what-is-menstrual-cycle");
                infoText.style.visibility = "hidden";
            }}>
                What is the menstrual cycle?
            </h1>
            <text id="what-is-menstrual-cycle" className="info-text">
                The menstrual cycle is the monthly hormonal cycle a female’s body goes through to prepare for pregnancy. <br/>
                Your menstrual cycle is counted from the first day of your period up to the first day of your next period. <br/>
                Your hormone levels (estrogen and progesterone) usually change throughout the menstrual cycle and can cause menstrual symptoms.
            </text>
            <h1 className="info-header" onMouseEnter={() => {
                const infoText = document.getElementById("how-long-is-a-typical-menstrual-cycle");
                infoText.style.visibility = "visible";
            }} onMouseLeave={() => {
                const infoText = document.getElementById("how-long-is-a-typical-menstrual-cycle");
                infoText.style.visibility = "hidden";
            }}>
                How long is a typical menstrual cycle?
            </h1>
            <text id="how-long-is-a-typical-menstrual-cycle" className="info-text">
                The typical menstrual cycle is 28 days long, but each woman is different. Also, a woman’s menstrual cycle length might be different from month-to-month. <br/>
                Your periods are still “regular” if they usually come every 24 to 38 days. <br/>
                This means that the time from the first day of your last period up to the start of your next period is at least 24 days but not more than 38 days. <br/>
                Some women’s periods are so regular that they can predict the day and time that their periods will start. <br/>
                Other women are regular but can only predict the start of their period within a few days.
            </text>
            <h1 className="info-header" onMouseEnter={() => {
                const infoText = document.getElementById("what-is-ovulation");
                infoText.style.visibility = "visible";
            }} onMouseLeave={() => {
                const infoText = document.getElementById("what-is-ovulation");
                infoText.style.visibility = "hidden";
            }}>
                What is ovulation?
            </h1>
            <text id="what-is-ovulation" className="info-text">
                Ovulation is when the ovary releases an egg so it can be fertilized by a sperm in order to make a baby. <br/>
                A woman is most likely to get pregnant if she has sex without birth control in the three days before and up to the day of ovulation (since the sperm are already in place and ready to fertilize the egg as soon as it is released). <br/>
                A man’s sperm can live for 3 to 5 days in a woman’s reproductive organs, but a woman’s egg lives for just 12 to 24 hours after ovulation. <br/>
                Each woman’s cycle length may be different, and the time between ovulation and when the next period starts can be anywhere from one week (7 days) to more than 2 weeks (19 days). <br/>

                At different times in a woman’s life, ovulation may or may not happen: <br/>
                1. Women who are pregnant do not ovulate. <br/>
                2. Women who are breastfeeding may or may not ovulate. Women who are breastfeeding should talk to their doctor about birth control methods if they do not want to get pregnant. <br/>
                3. During perimenopause, the transition to menopause, you may not ovulate every month. <br/>
                4. After menopause you do not ovulate.
            </text>
            <h1 className="info-header" onMouseEnter={() => {
                const infoText = document.getElementById("why-should-i-keep-track-of-my-menstrual-cycle");
                infoText.style.visibility = "visible";
            }} onMouseLeave={() => {
                const infoText = document.getElementById("why-should-i-keep-track-of-my-menstrual-cycle");
                infoText.style.visibility = "hidden";
            }}>
                Why should I keep track of my menstrual cycle?
            </h1>
            <text id="why-should-i-keep-track-of-my-menstrual-cycle" className="info-text">
                If your periods are regular, tracking them will help you know when you ovulate, when you are most likely to get pregnant, and when to expect your next period to start. <br/>
                If your periods are not regular, tracking them can help you share any problems with your doctor or nurse. <br/>
                If you have period pain or bleeding that causes you to miss school or work, tracking these period symptoms will help you and your doctor or nurse find treatments that work for you. <br/>
                Severe pain or bleeding that causes you to miss regular activities is not normal and can be treated.
            </text>
            <h1 className="info-header" onMouseEnter={() => {
                const infoText = document.getElementById("what-is-a-normal-amount-of-bleeding-during-my-period");
                infoText.style.visibility = "visible";
            }} onMouseLeave={() => {
                const infoText = document.getElementById("what-is-a-normal-amount-of-bleeding-during-my-period");
                infoText.style.visibility = "hidden";
            }}>
                What is a normal amount of bleeding during my period?
            </h1>
            <text id="what-is-a-normal-amount-of-bleeding-during-my-period" className="info-text">
                The average woman loses about two to three tablespoons of blood during her period. Your periods may be lighter or heavier than the average amount. <br/>
                What is normal for you may not be the same for someone else. Also, the flow may be lighter or heavier from month to month. <br/>
                Your periods may also change as you get older. Some women have heavy bleeding during perimenopause, the transition to menopause. <br/>

                Symptoms of heavy menstrual bleeding may include: <br/>
                1. Bleeding through one or more pads or tampons every one to two hours. <br/>
                2. Passing blood clots larger than the size of quarters. <br/>
                3. Bleeding that often lasts longer than eight days.
            </text>
            <h1 className="info-header" onMouseEnter={() => {
                const infoText = document.getElementById("how-often-should-i-change-my-pad-tampon-menstrual-cup-sponge-or-period-panties");
                infoText.style.visibility = "visible";
            }} onMouseLeave={() => {
                const infoText = document.getElementById("how-often-should-i-change-my-pad-tampon-menstrual-cup-sponge-or-period-panties");
                infoText.style.visibility = "hidden";
            }}>
                How often should I change my pad, tampon, menstrual cup, sponge, or period panties?
            </h1>
            <text id="how-often-should-i-change-my-pad-tampon-menstrual-cup-sponge-or-period-panties" className="info-text">
                Follow the instructions that came with your period product. Try to change or rinse your feminine hygiene product before it becomes soaked through or full. <br/>

                1. Most women change their pads every few hours.
                2. A tampon should not be worn for more than 8 hours because of the risk of toxic shock syndrome (TSS). <br/>
                3. Menstrual cups and sponges may only need to be rinsed once or twice a day. <br/>
                4. Period panties (underwear with washable menstrual pads sewn in) can usually last about a day, depending on the style and your flow. <br/>
                Use a product appropriate in size and absorbency for your menstrual bleeding. <br/>
                The amount of menstrual blood usually changes during a period. Some women use different products on different days of their period, depending on how heavy or light the bleeding is.
            </text>
            <h1 className="info-header" onMouseEnter={() => {
                const infoText = document.getElementById("what-is-toxic-shock-syndrome");
                infoText.style.visibility = "visible";
            }} onMouseLeave={() => {
                const infoText = document.getElementById("what-is-toxic-shock-syndrome");
                infoText.style.visibility = "hidden";
            }}>
                What is toxic shock syndrome?
            </h1>
            <text id="what-is-toxic-shock-syndrome" className="info-text">
                Toxic shock syndrome (TSS) is a rare but sometimes deadly condition caused by bacteria that make toxins or poisons. In 1980, 63 women died from TSS. A certain brand of super absorbency tampons was said to be the cause. These tampons were taken off the market. <br/>
                Today, most cases of TSS are not caused by using tampons. But, you could be at risk for TSS if you use more absorbent tampons than you need for your bleeding or if you do not change your tampon often enough (at least every four to eight hours). <br/>
                Menstrual cups, cervical caps, sponges, or diaphragms (anything inserted into your vagina) may also increase your risk for TSS if they are left in place for too long (usually 24 hours). <br/>
                Remove sponges within 30 hours and cervical caps within 48 hours. <br/>
                If you have any symptoms of TSS, take out the tampon, menstrual cup, sponge, or diaphragm, and call 911 or go to the hospital right away. <br/>

                Symptoms of TSS include: <br/>
                1. Sudden high fever. <br/>
                2. Muscle aches. <br/>
                3. Vomiting. <br/>
                4. Nausea. <br/>
                5. Diarrhea. <br/>
                6. Rash. <br/>
                7. Kidney or other organ failure.
            </text>
            <h1 className="info-header" onMouseEnter={() => {
                const infoText = document.getElementById("how-does-the-menstrual-cycle-affect-other-health-problems");
                infoText.style.visibility = "visible";
            }} onMouseLeave={() => {
                const infoText = document.getElementById("how-does-the-menstrual-cycle-affect-other-health-problems");
                infoText.style.visibility = "hidden";
            }}>
                How does the menstrual cycle affect other health problems?
            </h1>
            <text id="how-does-the-menstrual-cycle-affect-other-health-problems" className="info-text">
                The changing hormone levels throughout the menstrual cycle can also affect other health problems: <br/>

                1. Depression and anxiety disorders. These conditions often overlap with premenstrual syndrome (PMS). Depression and anxiety symptoms are similar to PMS and may get worse before or during your period. <br/>
                2. Asthma. Your asthma symptoms may be worse during some parts of your cycle. <br/>
                3. Irritable bowel syndrome (IBS). IBS causes cramping, bloating, and gas. Your IBS symptoms may get worse right before your period. <br/>
                4. Bladder pain syndrome. Women with bladder pain syndrome are more likely to have painful cramps during PMS.
            </text>
            <button onClick={() => window.location.href="/home"}>Home</button>
        </div>
    );
}

export default Info;