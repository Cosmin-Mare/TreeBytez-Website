"use client";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import Image from "next/image";
import { useRef, useState } from "react";
import { useEffect } from "react";
import Confetti from "react-confetti";
import Accordion from "@/components/accordion";
export default function Home() {
  const sealRef = useRef(null);
  const parallaxRef = useRef(null);
  const envelopeTriangleRef = useRef(null);
  const invitationRef = useRef(null);
  const envelopeRef = useRef(null);
  const envelopeLayerRef = useRef(null);
  const [isExploding, setIsExploding] = useState(false);
  const [bodyNeeded, setBodyNeeded] = useState(true);

  const [accordions, setAccordion] = useState([
    {
      key: 1,
      title: "Cum mă înscriu?",
      data: (
        <p>
          Completează <a href="#">acest formular</a> pentru a te înscrie
          gratuit! Locurile sunt limitate, deci grăbește-te
        </p>
      ),
      isOpen: false,
    },
    {
      key: 2,
      title: "Pot să particip la acest hackathon?",
      data: (
        <p>
          Acest eveniment este deschis pentru toți elevii care sunt în liceu sau
          gimnaziu, dar ne așteptăm ca majoritatea participanților sa fie din
          liceu (dar asta nu înseamnă că nu poți veni dacă ești în gimnaziu).
        </p>
      ),
      isOpen: false,
    },
    {
      key: 3,
      title: "Ce nivel de experiență este potrivit?",
      data: (
        <p>
          Acest eveniment este pentru toata lumea, asta înseamnă că ești
          binevenit indiferent de nivelul tău de experiență, chiar dacă nu ai
          văzut nicio linie de cod în viața ta, sau chiar dacă deja te antrenezi
          intens pe partea de programare. Majoritatea participanților vor avea
          un nivel de experiență de aproape 0, dar și cei experimentați vor avea
          multe de învățat.
        </p>
      ),
      isOpen: false,
    },
    {
      key: 4,
      title: "Ce este mai exact TreeBytez?",
      data: (
        <p>
          TreeBytez este un hackathon(eveniment de programare) organizat de{" "}
          <a href="#">un grup de adolescenți</a>, unde ne adunăm pentru [x] zile
          să creăm jocuri fantastice și să învățăm alături de cunoscători in
          domeniu.
        </p>
      ),
      isOpen: false,
    },
    {
      key: 5,
      title: "Cine sunt organizatorii?",
      data: (
        <p>
          Suntem un grup de adolescenți din Dej, Cluj, pasionați de programare.
          Avem în spate ani de experiență si zeci de proiecte și suntem
          nerăbdători să împărtășim aceste cunoștințe cu voi. Aici găsiți
          site-ul nostru, unde puteți afla mai multe detalii: <a href="#">#</a>
        </p>
      ),
      isOpen: false,
    },
    {
      key: 6,
      title: "Unde și când va avea loc acest eveniment?",
      data: (
        <p>
          În weekendul din perioada 29 mai - 1 iunie te așteptăm la{" "}
          <a href="#">Figa, Beclean</a> pentru a descoperi lumea magică a
          programării de jocuri video.
        </p>
      ),
      isOpen: false,
    },
    {
      key: 7,
      title: "Cât costă să particip?",
      data: (
        <p>
          0 lei, e gratis! <a href="#">Mulțumită sponsorilor</a>, vom putea
          aproviziona mâncare, cazare și premii pentru tot evenimentul.
        </p>
      ),
      isOpen: false,
    },
    {
      key: 8,
      title: "Ce trebuie să aduc la eveniment?",
      data: (
        <p>
          Un laptop, încărcător, obiecte de igienă personala(periuță, pastă de
          dinți, deodorant, gel de duș, prosop, etc.)
        </p>
      ),
      isOpen: false,
    },
    {
      key: 9,
      title: "Cum o să fim cazați?",
      data: (
        <p>
          Cazarea va fi asigurată de <a href="">Căsuțele Sebastian</a>, fiecare
          căsuță este dotată cu un pat matrimonial(într-o căsuță vor dormi doar
          persoane de același sex), baie proprie, apă caldă.
        </p>
      ),
      isOpen: false,
    },
    {
      key: 10,
      title: "Părinții mei sunt îngrijorați. Ce pot să fac?",
      data: (
        <p>
          Suntem deschiși pentru a primi orice întrebare la adresa de email
          <a href="mailto:#">vectorbytez@gmail.com</a>, sau la nr de tel{" "}
          <a href="#">+40760051313</a>. Vom avea supraveghere 24/7 pe toată
          durata evenimentului de către voluntari, datorită asociației
          <a href="#">Vă Ajutăm din Dej</a>
        </p>
      ),
      isOpen: false,
    },
    {
      key: 11,
      title: "Am alte întrebări.",
      data: (
        <p>
          Pentru orice întrebare, poți să ne trimiți un email la{" "}
          <a href="mailto:#">vectorbytez@gmail.com</a> și vom răspunde in maxim
          24 de ore.
        </p>
      ),
      isOpen: false,
    },
  ]);

  const toggleAccordion = (accordionkey) => {
    const updatedAccordions = accordions.map((accord) => {
      if (accord.key === accordionkey) {
        return { ...accord, isOpen: !accord.isOpen };
      } else {
        return { ...accord, isOpen: false };
      }
    });

    setAccordion(updatedAccordions);
  };

  const scrollListener = () => {
    const handleWheelEvent = () => {
      const { container, current } = parallaxRef.current;
      const scrollpercent =
        current / (container.current.scrollHeight - window.innerHeight);
      console.log(scrollpercent);
      if (scrollpercent > 0.01) {
        setIsExploding(true);
        sealRef.current.style.opacity = 0;
      } else {
        sealRef.current.style.opacity = 1;
      }
      envelopeTriangleRef.current.style.transform = `rotateX(${
        scrollpercent * 3 * 360 > 180 ? 180 : scrollpercent * 3 * 360
      }deg)`;
      envelopeTriangleRef.current.style.transformOrigin = "top";

      if (scrollpercent > 0.1) {
        var translate = (scrollpercent - 0.1) * 600;
        envelopeRef.current.style.transform = `translateY(${translate}%)`;
        console.log(translate);
        if (translate > 75) {
          invitationRef.current.style.transition =
            "max-height 3s ease-in-out , min-height 3s ease-in-out, width 0.5 ease-in-out";
          invitationRef.current.style.width = "80%";
          invitationRef.current.style.maxHeight = "10000px";
          invitationRef.current.style.transform = `translateY(40%)`;
          console.log(invitationRef.current.style.maxHeight);
          invitationRef.current.style.minHeight = "10%";
          setBodyNeeded(false);
        } else {
          invitationRef.current.style.width = "50%";
          envelopeRef.current.style.display = "flex";
          invitationRef.current.style.minHeight = "50%";
          invitationRef.current.style.maxHeight = "50%";
          invitationRef.current.style.transform = `translateY(0%)`;
          setBodyNeeded(true);
        }
      } else {
        envelopeRef.current.style.transform = `translateY(0%)`;
      }
    };
    window.addEventListener("wheel", handleWheelEvent);
    return () => {
      window.removeEventListener("wheel", handleWheelEvent);
    };
  };
  useEffect(scrollListener, []);

  // UseEffect to animate seal opacity
  return (
    <div>
      <Parallax pages={8} ref={parallaxRef}>
        <ParallaxLayer offset={-0.2} speed={1} factor={17} className="bg" />
        <ParallaxLayer offset={0} speed={0.5} sticky={{ start: 0, end: 8 }}>
          {isExploding && (
            <Confetti
              width={1920}
              height={1080}
              numberOfPieces={1000}
              recycle={false}
            />
          )}
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={0.5} sticky={{ start: 0, end: 2 }}>
          <div className="flex items-center justify-center w-[100%] h-[100%] relative">
            <div
              className="w-[50%] max-h-[50%] min-h-[50%] bg-[#EEE7D7] transition-all ease-in-out duration-1000 rounded-md overflow-hidden"
              ref={invitationRef}
            >
              <div className="flex justify-center w-[100%] h-[100%] mb-10 decoration-black">
                <h1 className="text-4xl font-bold">Te invit la TreeBytez</h1>
              </div>
              <div className="text-[#384a41] flex justify-center mb-10">
                <div className=" w-[95%]">
                  <p>
                    Te invit să te aventurezi într-o excursie de neuitat, care
                    va dura [x] zile, unde te vei putea bucura de natura, dar și
                    să înveți de la 0 cum să îți creezi propriul joc, alături de
                    alți adolescenți cu o pasiune comună pentru jocuri.
                  </p>
                </div>
              </div>
              {accordions.map((accordion) => (
                <Accordion
                  key={accordion.key}
                  title={accordion.title}
                  data={accordion.data}
                  isOpen={accordion.isOpen}
                  toggleAccordion={() => toggleAccordion(accordion.key)}
                />
              ))}
            </div>
          </div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={0.5} sticky={{ start: 0, end: 1 }}>
          <div className="flex items-center justify-center w-[100%] h-[100%] relative">
            <img
              style={{ transition: "all 0.1s ease-in-out" }}
              src="/envelope-triangle.png"
              ref={envelopeTriangleRef}
              className="w-[50%] h-[35%] top-[25%] left-[25%] absolute"
            />
          </div>
        </ParallaxLayer>
        <ParallaxLayer
          offset={0}
          speed={0}
          sticky={{ start: 0, end: 8 }}
          style={{ display: bodyNeeded ? "block" : "none" }}
        >
          <div
            className="flex items-center justify-center w-[100%] h-[100%] relative transition-all duration-200 ease-in-out"
            ref={envelopeRef}
          >
            <img
              src="/envelope-body.png"
              alt="envelope"
              className="w-[50%] h-[50%]"
            />
          </div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={0.5} sticky={{ start: 0, end: 0.2 }}>
          <div className="flex items-center justify-center w-[100%] h-[100%] relative">
            <button>
              <img
                style={{ transition: "opacity 0.5s ease-in-out" }}
                ref={sealRef}
                src="/seal.png"
                className="w-[5%] h-[9%] top-[52.5%] left-[47.5%] absolute"
              />
            </button>
          </div>
        </ParallaxLayer>
      </Parallax>
    </div>
  );
}
