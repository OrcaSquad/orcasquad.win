import React from "react";
import Image from "next/image";
import styles from "../styles/Home.module.css";

const HomePage = () => {
    return (
        <div className={styles.container}>
            <p>Hello, OrcaSquad!</p>
            <p>
                This is just placeholder text. Don’t be alarmed, this is just
                here to fill up space since your finalized copy isn’t ready yet.
                Once we have your content finalized, we’ll replace this
                placeholder text with your real content.
            </p>
            <p>
                Sometimes it’s nice to put in text just to get an idea of how
                text will fill in a space on your website.
            </p>
            <p>
                Traditionally our industry has used Lorem Ipsum, which is
                placeholder text written in Latin. Unfortunately, not everyone
                is familiar with Lorem Ipsum and that can lead to confusion. I
                can’t tell you how many times clients have asked me why their
                website is in another language!
            </p>
            <p>
                There are other placeholder text alternatives like Hipster
                Ipsum, Zombie Ipsum, Bacon Ipsum, and many more. While often
                hilarious, these placeholder passages can also lead to much of
                the same confusion.
            </p>
            <p>
                If you’re curious, this is Website Ipsum. It was specifically
                developed for the use on development websites. Other than being
                less confusing than other Ipsum’s, Website Ipsum is also
                formatted in patterns more similar to how real copy is formatted
                on the web today.
            </p>
        </div>
    );
};

export default HomePage;
