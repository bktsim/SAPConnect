/* eslint-disable react/jsx-key */
import { Spacer, useTheme } from "@nextui-org/react";
import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import ClubCreation from "./src/components/EventCreation";
import CustomNavbar from "./src/components/CustomNavbar";
import EventCard from "./src/components/EventCard";
import EventCarousel from "./src/components/EventCarousel";
import ProfileCard from "./src/components/ProfileCard";
import ProfileCarousel from "./src/components/ProfileCarousel";
import InterestCarousel from "./src/components/InterestCarousel";

const profile = {
  name: "FirstNameABC LastNameCDE",
  pronouns: "They/Them",
  team: "Tomfoolery Department",
  icon: "https://styles.redditmedia.com/t5_2tc6s/styles/communityIcon_vn92glo5ugy51.png",
  location: "The Tomfoolery Tower",
  bio: "The best toomfooler in the house. This is a long description because the minions like to play around and break things so they typ every long things that dont make sense lolololO!!JIOASUJDIUAHSIDHASIDHUAISDHASIDHIASHDIAUHSDIASHDIAHSDIAUHSD haha lol gotem",
  tags: ["bananas", "cereal", "memes"],
};

const event = {
  name: "Banana Mischief",
  location: "Main Mall UBC, Vancouver BC, V6T1Z2, Canada",
  type: "In-Person",
  date: new Date(2022, 11, 24, 12, 0),
  organizer: "The Great Minion",
  description:
    "Throw all the bananas around. Put bananas in peoples bags without them noticing. Spread the bananas and chaos!",
  tags: ["bananas", "mischief"],
};

const eventOnline = {
  name: "Banana Mischief (Online)",
  location: "https://zoom.us/",
  type: "Online",
  date: new Date(2022, 11, 24, 14, 0),
  organizer: "The Great Minion",
  description:
    "Throw all the bananas around. Put bananas in peoples bags without them noticing. Spread the bananas and chaos!",
  tags: ["bananas", "mischief", "online"],
};

const a = <EventCard info={event} />;
const b = <EventCard info={eventOnline} />;
const c = <ProfileCard info={profile} />;

const fakeHobbies = [
  "eating",
  "pooping",
  "breathing",
  "trolling",
  "working",
  "dying",
  "living",
  "surviving",
  "jack sparrow",
];

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <CustomNavbar />
      <Spacer y={1} />

      <InterestCarousel tags={fakeHobbies} />
      <Spacer y={1} />
      <ProfileCarousel profiles={[c, c, c, c, c, c]} />
      <Spacer y={1} />
      <EventCarousel events={[a, b, a, a, b]} />
      <Spacer y={1} />
    </div>
  );
};

export default Home;
