"use client";
import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
import Modal from "./modal";
import axios from "axios";

interface ValidationResult {
  error: boolean;
  message: string;
}

export default function Home() {
  const [showText, setShowText] = useState(false);
  const [isRotated, setIsRotated] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [email, setEmail] = useState<string>("");
  const [validationResult, setValidationResult] = useState<ValidationResult>({
    error: false,
    message: "",
  });

  const toggleTextVisibility = () => {
    setShowText(!showText);
    setIsRotated(!isRotated);
  };

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const validateEmail = () => {
    axios
      .post<ValidationResult>("/validateEmail.php", { email })
      .then((response) => {
        const { error, message } = response.data;
        setValidationResult({ error, message });
      })
      .catch((error) => {
        console.error("Error validating email:", error);
        setValidationResult({
          error: true,
          message: "Email is not valid.",
        });
      });
  };
  const isInputEmpty = email.trim() === "";

  const handleBetNowClick = () => {
    console.log("Button clicked");
  };

  return (
    <main
      className="flex min-h-screen flex-col items-center bg-cover bg-top relative"
      style={{ backgroundImage: "url('/images/bg.png')" }}
    >
      {/* First Section: Header */}
      <header className="flex p-5 sm:w-3/4 justify-between w-full">
        <Image
          src="/images/Logo.png"
          alt="Header Image"
          width={200}
          height={200}
          onClick={() => {
            window.open("http://www.coral.co.uk", "_blank");
          }}
          style={{ cursor: "pointer" }}
        />
        <div
          className="flex items-center cursor-pointer"
          onClick={() => {
            window.open("http://www.coral.co.uk ", "_blank");
          }}
        >
          <span className=" text-white underline border rounded-md px-2 py-1 text-xs">
            Im Already A Customer
          </span>
          <span className="text-[#b48300] bg-[#ffd600] px-2 py-0.5 rounded-md font-black">
            LOGIN
          </span>
        </div>
      </header>

      {/* Second Section: Hero */}
      <section className="relative">
        <div className="relative">
          <Image
            src="/images/hero.png"
            alt="Hero Image"
            width={500}
            height={200}
          />
        </div>
        <div className="absolute top-[182px] left-[150px]">
          <Image
            src="/images/onTop.png"
            alt="Hero Image"
            width={200}
            height={200}
          />
        </div>
        <div className="absolute top-[197px] left-[175px]">
          <Image
            src="/images/onTopMsg.png"
            alt="Hero Image"
            width={150}
            height={200}
          />
        </div>
        <div className="absolute flex flex-col items-center top-[225px] left-[45px] max-w-[400px] text-center">
          <span className="font-breuerheadline text-2xl text-white tracking-wide">
            LIVERPOOL v AUGSBURG
          </span>
          <span className="font-breuerheadline text-4xl uppercase tracking-wide text-yellow-400">
            Liverpool to win In 90 mins
          </span>
          <span className="font-breuerheadline text-6xl tracking-normal text-yellow-400">
            8/1
          </span>
          <span className="font-breuerfont text-white uppercase tracking-tight">
            £/€ 5 bet only | plus £/€ free bet should your bet loose
          </span>
          <input
            placeholder="Email"
            className="px-2 py-1 mt-1"
            value={email}
            onChange={handleInputChange}
            onBlur={validateEmail}
          />
        </div>
        <div className="bg-[#964656] p-0.5 rounded-md absolute top-[470px] left-[105px]">
          <div className="bg-[#f1801e] p-0.5 rounded-md">
            <div className="bg-[#c7cd05] p-0.5 rounded-md">
              <div className=" bg-[#78b522] p-0.5 rounded-md">
                <div
                  className="bg-gradient-to-r from-[#241b49] via-[#61abdd] to-[#241b49] py-3 px-16 rounded-md hover:bg-gradient-to-r hover:from-[#61abdd] hover:via-[#241b49] hover:to-[#61abdd] transition-all duration-500 cursor-pointer"
                  onClick={isInputEmpty ? undefined : handleBetNowClick}
                  style={{ pointerEvents: isInputEmpty ? "none" : "auto" }}
                >
                  <span className="text-white font-zingrust text-2xl tracking-widest">
                    BET NOW &gt; &gt;{" "}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center">
          {validationResult.error ? (
            <p style={{ color: "red" }}>{validationResult.message}</p>
          ) : (
            <p style={{ color: "green" }}>{validationResult.message}</p>
          )}
        </div>
      </section>

      {/* Third Section: Steps */}
      <section className="flex items-center lg:w-3/5 md:w-4/5">
        {/* 1st Step */}
        <div className="flex items-center">
          <div className="flex relative items-center">
            <div className="relative rotate-animation">
              <Image
                src="/images/4.png"
                alt="Steps Image"
                width={200}
                height={200}
              />
            </div>
            <div className="absolute">
              <Image
                src="/images/1.png"
                alt="Steps Image"
                width={200}
                height={200}
              />
            </div>
          </div>
          <div className="font-breuertextbold text-white uppercase text-xl">
            <span>Register & Deposit £/€ 5 or More</span>
          </div>
        </div>

        <div className="border py-12 mx-2 border-blue-900 rounded"></div>
        {/* 2nd Step */}
        <div className="flex items-center">
          <div className="flex relative items-center">
            <div className="relative rotate-animation">
              <Image
                src="/images/4.png"
                alt="Steps Image"
                width={200}
                height={200}
              />
            </div>
            <div className="absolute">
              <Image
                src="/images/2.png"
                alt="Steps Image"
                width={200}
                height={200}
              />
            </div>
          </div>
          <div className="font-breuertextbold text-white uppercase text-xl">
            <span>Your Enhanced Odds Will Display on The Home Page</span>
          </div>
        </div>

        <div className="border py-12 mx-2 border-blue-900 rounded"></div>
        {/* 3rd Step */}
        <div className="flex items-center">
          <div className="flex relative items-center">
            <div className="relative rotate-animation">
              <Image
                src="/images/4.png"
                alt="Steps Image"
                width={200}
                height={200}
              />
            </div>
            <div className="absolute">
              <Image
                src="/images/3.png"
                alt="Steps Image"
                width={200}
                height={200}
              />
            </div>
          </div>
          <div className="font-breuertextbold text-white uppercase text-xl">
            <span>
              If your bet wins your winnings will be paid as a £/€40 free bet
            </span>
          </div>
        </div>
      </section>

      {/* Fourth Section: Ad */}
      <section className="m-4">
        <Image
          src="/images/ads.png"
          alt="Steps Image"
          height={400}
          width={200}
        />
      </section>

      {/* Fifth Section: Credits*/}
      <section className="flex flex-col font-breuerfont items-center slide">
        <div className="flex p-2 gap-2 items-center text-white underline">
          <motion.div
            animate={{ rotate: isRotated ? 90 : 0 }} // Rotate the image when isRotated is true
            transition={{ duration: 0.5 }}
          >
            <Image
              src="/images/arrow.png"
              alt="Steps Image"
              height={400}
              width={15}
            />
          </motion.div>
          <span className="cursor-pointer" onClick={toggleTextVisibility}>
            About Coral Sports Betting
          </span>
          <div className="border py-2 bg-white"></div>
          <span className="cursor-pointer" onClick={toggleModal}>
            Terms & Conditions
          </span>
        </div>

        <motion.div
          className="py-2 text-white text-sm px-28"
          animate={{
            maxHeight: showText ? 2000 : 0,
            opacity: showText ? 1 : 0,
          }}
          transition={{ duration: 0.5 }}
          style={{ overflow: "hidden" }}
        >
          <p className="text-center pb-2"> Terms And Conditions </p>{" "}
          <p>
            {" "}
            1. Only new players aged 18 or over, who created a Coral Poker
            nickname are eligible to receive the Welcome Bonus.{" "}
          </p>{" "}
          <p>
            {" "}
            2. Players must download the poker client, create a poker nickname,
            then make a first deposit via the download poker client. Only
            deposits made via the poker download client will trigger the bonus.{" "}
          </p>{" "}
          <p>
            {" "}
            3. Players who deposited £5+ will qualify for the first welcome
            offer of £20 worth of cash and tokens. Player who deposited £10+
            will qualify for both welcome offers, including £20 worth of cash
            and tokens and a 100% pending bonus up to £200.{" "}
          </p>{" "}
          <p>
            {" "}
            4. If the bonus does not automatically credit on first deposit
            please contact us at help@coral.co.uk and we will be happy to add
            it.{" "}
          </p>{" "}
          <p>
            {" "}
            5. Players who have an account with a currency other than GBP will
            receive the currency equivalent in bonus dollars.{" "}
          </p>{" "}
          <p>
            {" "}
            6. Tokens will be credited to players accounts instantly following
            deposit, the £5 will be released after 1 poker point has been earned
            at the tables.{" "}
          </p>{" "}
          <p>
            {" "}
            7. The Pending bonus is released in stages according to the number
            of VIP Points you earn at real cash tables and tournaments. For more
            information on how to earn points please click here.{" "}
          </p>{" "}
          <p>
            {" "}
            8. The pending bonus will be released in £5 increment for every 300
            points earned.{" "}
          </p>{" "}
          <p>
            {" "}
            9. Once released, the funds can be played on any Coral product or
            cashed out.{" "}
          </p>{" "}
          <p>
            {" "}
            10. You must accumulate the necessary number of VIP Points within 90
            days of your nickname creation to complete the pending bonus. Any
            remaining pending bonus funds will be removed from your account if
            the required numbers of points are not accrued in this timeframe.{" "}
          </p>{" "}
          <p>
            {" "}
            11. €5 tournament tokens will expire after 14 days if not used{" "}
          </p>{" "}
          <p>
            {" "}
            12. The status of pending bonus dollars may be found in the &#34 My
            Account &#34 section of the Poker client.{" "}
          </p>{" "}
          <p>
            {" "}
            13. Please note that our Poker games may be played in USD ($). GBP
            (£) and Euro (€). The &#34 Cashier &#34 will automatically convert your
            funds into your desired currency of play (and back) at the
            prevailing daily exchange rate.{" "}
          </p>{" "}
          <p>14. For additional promotional terms, click here.</p>{" "}
          <p>15. Promoter: Coral Interactive (Gibraltar) Limited, Gibraltar.</p>
          <hr className="pt-3"></hr>
        </motion.div>
        <Modal isOpen={isModalOpen} onClose={toggleModal}>
          <p>
            1. The £30 free bet offer is available for new coral.co.uk customers
            who deposit and bet a total of £30 on any sports event(s).
          </p>
          <p>
            2. The free bet will be triggered by the first deposit amount and
            will not be applicable for subsequent deposit values.
          </p>
          <p>
            3. Customers depositing and staking less than £30 will receive the
            equivalent free bet value. For example: a customer that deposits an
            initial amount of £5 will be credited with a £5 free bet once they
            have bet a total of £5 on any sports event(s).
          </p>
          <p>
            4. Advertised offers relating to the opening of a Coral.co.uk
            account are limited to one per customer.
          </p>
          <p>
            5. In the case of a customer opening more than one Coral.co.uk
            account, we reserve the right to suspend and close duplicate
            accounts, and make void any bets placed.
          </p>
          <p>
            6. Please note that the free bet will only appear in your account
            once the amount of your own deposit has been bet with on any
            sporting event(s) (this doesn &#34 t have to be bet as one go but can be
            bet in increments). The free bet must then be staked before any
            withdrawal is permitted. Void bets do not count toward this offer.
          </p>
          <p>
            7. The free bet can be used on &#34 sports &#34 events and are not valid for
            Games, Casino, Virtual Sports, Poker, Lotto, Bingo, Live Casino.
          </p>
          <p>
            8. The free bet can be redeemed on win or each-way bets and can used
            on the following listed bet types: single, double, treble, 4-fold
            and upwards accumulator, forecast, combination forecast, tricast and
            combination tricast.
          </p>
          <p>
            9. The original free bet stake is not returned with any winnings.
          </p>
          <p>
            10. The free bet is not valid on tote, other combination and
            multiple bets (i.e Lucky 15s)
          </p>
          <p>11. The free bet is valid for 30 days.</p>
          <p>
            12. We reserve the right to amend or withdraw any promotion at any
            point for whatever reason.
          </p>
          <p>13. Coral.co.uk rules apply.</p>
          <p>14. Offer only available to UK Residents aged 18 or over.</p>
        </Modal>
      </section>
    </main>
  );
}
