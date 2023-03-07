// multiple load prevention

alert('a');
if(typeof preisMitRabatt == "undefined")
{
    const preisMitRabatt = document.getElementById("preis-mit-rabatt");
    const preisMitRabatt2 = document.getElementById("preis-mit-rabatt2");
    const preisNormal = document.getElementById("angebotspreis");
    const preisNormal2 = document.getElementById("angebotspreis2");
    const preisSparen = document.getElementById("sparen");
    const preisSparen2 = document.getElementById("sparen2");
    const page1 = document.getElementById("page1");
    const page2 = document.getElementById("page2");
    const monthSelect = document.getElementById("month");
    const expiration = document.getElementById("expiration-date");
    const headerData = tryParseJSONObject((typeof headerDataRaw !== 'undefined') ? headerDataRaw : "");
    let expired = false;

    const popup1 = document.getElementById("popup1");
    const popup2 = document.getElementById("popup2");
    const popup3 = document.getElementById("popup3");

    const swiper_s = document.createElement("script");
    swiper_s.src = "https://unpkg.com/swiper@8.1.4/swiper-bundle.min.js";
    swiper_s.defer = true;
    document.head.appendChild(swiper_s);
    swiper_s.addEventListener("load", () =>
    {
        init();
    });

    const stringTable = 
    [
        ["Empfängerbereich", "recipient area"],
        ["Geheimratsecken klein", "receding hairline"],
        ["Geheimratsecken groß", "receding hairline"],
        ["Geheimratsecken", "receding hairline"],
        ["Haarlinie", "receding hairline"],
        ["Tonsur", "Crown area"],
        ["Vorderer Bereich undicht", "Front area leaking"],
        ["Große Tonsur", "large tonsure"],
        ["Leichte Glatze", "slight baldness"],
        ["Große Glatze", "bald"],
        ["Undichte Haare", "thin hair"],
        ["Hohe Stirn", "receding hairline"],
        ["Bart", "Beard"],
        ["Bartlücken", "beard gaps"],
        ["Augenbrauen", "eyebrows"],
        ["Zimmertyp", "room type"],
        ["Übernachtung", "overnight stay"],
        ["Einzelzimmer", "Single room"],
        ["Doppelzimmer", "Double room"],
        ["Doppelzimmer für zwei Patienten", "Double room for two patients"],
        ["Suite", "Suite"],
        ["4 Sterne Hotel", "4 star hotel"],
        ["Elithair Klinik", "Elithair Clinic"],
    ];


    const init = () =>
    {
        const editables = document.getElementsByClassName("editable-field");
        for(editable of editables)
        {
            let editable_str = editable.textContent;

            if(editable_str && editable_str != "")
            {
                for(str of stringTable)
                {
                    editable_str = editable_str.replace(str[0], str[1]);
                }
            }

            editable.textContent = editable_str;
        }


        new Swiper('.klinik-slider', {
            slidesPerView: "1",
            pagination: {
                el: '.swiper-pagination',
                type: 'bullets',
            }
        });
        
        new Swiper('.causes-slider', {
            slidesPerView: "1",
            pagination: {
                el: '.swiper-pagination',
                type: 'bullets',
            }
        });
        
        new Swiper('.stories-slider', {
            slidesPerView: "1",
            pagination: {
                el: '.swiper-pagination',
                type: 'bullets',
            }
        });

        new Swiper('.pre-system-slider', {
            slidesPerView: "1",
            pagination: {
                el: '.swiper-pagination',
                type: 'bullets',
              },
          });

        monthSelect.selectedIndex = 0;
        monthSelect.options[0].setAttribute("selected", "");
        monthSelect.addEventListener('change', e => {
            document.querySelector('.last-warn').classList.add('active')
            document.querySelector('.last-warn p span').innerHTML = e.target.value
        });

        document.querySelector('#setAppointment').addEventListener('click', e =>
        {
            const oldp = document.querySelector('.chose-step');
            const newp = document.querySelector('.result-box');

            oldp.style.opacity = 0;
            newp.style.opacity = 0;

            
            const offerId = (new URLSearchParams(window.location.search).get("id"));
            const preferredDate = monthSelect.value;
            
            fetch((headerData?.req_url || "https://prod-api.elithair.tech/api/offers/") + 'accept-offer/',
            {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    offerId,
                    acceptedDate: "today",
                    preferredDate
                })
            })
            .then(response => response.json())
            .then(data => 
            {
                setTimeout(() => {
                    oldp.style.display = "none";
                    newp.style.display = "block";
                    
                    setTimeout(() => {
                        newp.style.opacity = "100%";
                    }, 100);
                }, 300);
            });
            
        });


        /**
         * EXPIRATION
         */
        const chunk1 = expiration.textContent.trim().split(" ");
        if(chunk1.length > 1)
        {
            const chunk2 = chunk1[chunk1.length - 1].split(".");
            const offerExpDate = new Date(parseInt(chunk2[2]), parseInt(chunk2[1])-1,  parseInt(chunk2[0]), 23, 59, 59);
            const now = new Date();
            if(now && now > offerExpDate)
            {
                expired = true;
            }
        }
        if(expired)
        {
            document.querySelector('.offer-message').classList.add("active");
        }
        document.querySelector('.offer-message button').addEventListener('click', e=> {
            document.querySelector('.offer-message').classList.remove('active')
        });


        /**
         * ALREADY ACCEPTED
         */
        if(headerData.isAccepted)
        {
            document.getElementById("acceptedMessage")?.classList.add("active");
        }
        document.querySelector('#acceptedMessage button')?.addEventListener('click', e=> {
            document.getElementById("acceptedMessage").classList.remove('active')
        });


        /**
         * SECOND SESSION (Zweite Sitzung)
         */
        const zweite = document.getElementById("zwei_sitzungen");
        if(zweite && zweite.textContent == "true")
        {
            document.querySelector(".price-box").classList.add("zwei");
            const zweiterText = document.getElementById("zweiter-text");
            if(zweiterText)
            {
                zweiterText.textContent = zweiterText.getAttribute("data-yes-text");
            }
        }
        
        
        /**
         * OFFER WITHOUT ACCEPT CTA (Wie geht es weiter?)
         */
         const change_cta = document.getElementById("change_cta");
         const change_cta_content = document.getElementById("change_cta_content");
         if(change_cta && (change_cta.textContent != "" && change_cta.textContent != "---"))
         {
             document.querySelectorAll('.primary-cta').forEach(item =>
             {
                 item.textContent = change_cta_content.getAttribute("data-cta-text");
 
                 item.addEventListener("click", e =>
                 {
                     window.location = change_cta_content.getAttribute("data-cta-link");
                 });
             });
         }
         else
         {
             /**
              * ACCEPT OFFER BUTTONS
              */
             document.querySelectorAll('.primary-cta').forEach(item =>
             {
                 item.addEventListener('click', e =>
                 {
                     if (expired)
                     {
                         e.preventDefault();
                         document.querySelector('.offer-message').classList.add('active')
                     }
                     else if(headerData.isAccepted)
                     {
                         e.preventDefault();
                         document.getElementById("acceptedMessage").classList.add("active");
                     }
                     else
                     {
                         page1.style.opacity = 0;
                         page2.style.opacity = 0;
                         
                         setTimeout(() => {
                             page1.style.display = "none";
                             page2.style.display = "block";
                             document.body.classList.remove("landing-body");
                             
                             setTimeout(() => {
                                 page2.style.opacity = "100%";
                             }, 100);
                         }, 300);
                     }
                 })
             });
         }


        /**
         * PRICES
         */
        if(preisMitRabatt.textContent == "---")
        {
            document.querySelector(".new").style.display = "none";
            document.querySelector(".old").classList.add("active");
        }
        else
        {
            preisSparen.textContent = parseInt(preisNormal.textContent) - parseInt(preisMitRabatt.textContent);
        }
        
        if(preisMitRabatt2.textContent == "---")
        {
            document.querySelector(".new2").style.display = "none";
            document.querySelector(".old2").classList.add("active");
        }
        else
        {
            preisSparen2.textContent = parseInt(preisNormal2.textContent) - parseInt(preisMitRabatt2.textContent);
        }
        
        
        /**
         * ACCORDION
         */
        initAcc('.accordion');


        /**
         * POPUP
         */
        document.getElementById("neo-info").addEventListener('click', e =>
        {
            popup1.classList.add("active");
        });
        document.getElementById("neo-close").addEventListener('click', e =>
        {
            popup1.classList.remove("active");
        });
        document.getElementById("pre-test-info").addEventListener('click', e =>
        {
            popup2.classList.add("active");
        });
        document.getElementById("pre-test-close").addEventListener('click', e =>
        {
            popup2.classList.remove("active");

        });        
        document.getElementById("sleep-info").addEventListener('click', e =>
        {
            popup3.classList.add("active");
        });
        document.getElementById("sleep-close").addEventListener('click', e =>
        {
            popup3.classList.remove("active");
        });
    }


    //===========================================================================================


    function initAcc(elem, option=true){
        document.addEventListener('click', function (e) {
            if (!e.target.matches(elem+' .a-btn')) return;
            else{
                if(!e.target.parentElement.classList.contains('active')){
                    if(option==true){
                        var elementList = document.querySelectorAll(elem+' .a-container');
                        Array.prototype.forEach.call(elementList, function (e) {
                            e.classList.remove('active');
                        });
                    }            
                    e.target.parentElement.classList.add('active');
                }else{
                    e.target.parentElement.classList.remove('active');
                }
            }
        });
    }
}


function tryParseJSONObject (jsonString){
    try {
        var o = JSON.parse(jsonString);
        if (o && typeof o === "object")
            return o;
    }
    catch (e) { }
    return false;
};