/* eslint-disable react/jsx-key */
import { Spacer } from "@nextui-org/react";
import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import CustomNavbar from "./src/components/CustomNavbar";
import EventCard from "./src/components/EventCard";
import EventCarousel from "./src/components/EventCarousel";
import ProfileCard from "./src/components/ProfileCard";
import ProfileCarousel from "./src/components/ProfileCarousel";
import InterestCarousel from "./src/components/InterestCarousel";
import useStorage from "./src/hooks/storage";
import { LoginContext } from "./_app";
import { allHobbies, fakeHobbies, fakeUser, event, eventOnline, profile } from "./constants/fakeData";
import { useContext } from "react";


const a = <EventCard info={event} />;
const b = <EventCard info={eventOnline} />;
const c = <ProfileCard info={profile} />;

export async function getServerSideProps() {
  // Fetch data from external API
  const allUsers = await fetch("http://localhost:3000/api/user", {
    method: "GET",
    headers: {
      "Content-type": "application/json; charset=UTF-8"
    }
  }).then(res => {
    if (res.status === 200) {
      return res.json().then((json) => json.users);
    } else {
      return [];
    }
  });

  // Pass data to the page via props
  return { props: { allUsers } }
}

const Home: NextPage = (props) => {
  const { user } = useContext(LoginContext);
  const nextprops = {
    userProfile: user,
  }; // TODO: get props from user here
  console.log("!!!!!!!!" + JSON.stringify(props.allUsers));
  return (
    <div className={styles.container}>
      <Head>
        <title>LetsPlay</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <CustomNavbar {...nextprops} />
      <Spacer y={1.275} />

      <InterestCarousel tags={fakeHobbies} alltags={allHobbies} />
      <Spacer y={1} />
      <ProfileCarousel profiles={props.allUsers.map((userProfile) => <ProfileCard info={userProfile} />)} />
      <Spacer y={1} />
      <EventCarousel events={[a, b, a, a, b]} allTags={allHobbies} />
      <Spacer y={1} />
    </div>
  );
};

export default Home;
