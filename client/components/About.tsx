import React from "react";

type Props = {};

function About({}: Props) {
  return (
    <div className="h-screen">
      {" "}
      <h1 className="text-red-500">
        KOYU/AÇIK MOD OLACAK - YAZI AKIŞI OLACAK ŞUANKİ GİBİ - DOMAİN ALINACAK -
        BİLDİĞİM ŞEYLER GÖSTERİLECEK- İÇİNDE MİNİK UYGULAMALAR OLACAK TODO APP
        GİBİ - itools eklenecek link verilecek.-
      </h1>
      <h1 className="text-3xl font-bold underline">I am Ali Temurtaş</h1>
      <p>
        <span>
          Information Systems Engineer,Software Developer,Web Developer,Mobile
          Developer,Lifelong Learner
        </span>
      </p>
      <div>
        <p>
          <span>Name: </span> <span>Ali Temurtaş</span>
        </p>
        <p>
          <span>Email: </span> <span>atemurtas97@gmail.com</span>
        </p>
        <p>
          <span>Github: </span> <a>https://github.com/kAli-97</a>
        </p>
      </div>
      <div className="row">
        <div className="col-md-12">
          <span id="longtext">HTML | CSS | JAVASCRIPT</span>
          <span>REACT | ANGULAR</span>
          <span>JAVA | KOTLIN</span>
          <span>C | C++ | C#</span>
          <span>FLUTTER</span>
          <span>DART</span>
          <span>PHP</span>
        </div>
      </div>
      <p>
        INFORMATION SYSTEMS ENGINEERING (B.S) %75 Scholarship CGPA: 2.67 / 4.00
        ATILIM UNIVERSITY – ANKARA
      </p>
      <p>Ayhan Sümer Anatolian High School, Ankara / Turkey GPA: 82.11 / 100</p>
      <p>
        I worked as a full stack developer under the FATİH project. Our job was
        developing a web application and interface for MEB.
      </p>
      -Building E-Commerce Shopping Cart Website in PHP & MySQL Certificate
      -Android Mobile App Course: Kotlin & Java Certificate -JAVA Programming
      Introductory Certificate -Advanced JAVA Certificate -Web Development with
      REACT Certificate -Web Development with ANGULAR Certificate -Mobile
      Application Course with Google Flutter Certificate I did small console
      projects and JavaFX applications like sudoku and paint and some mini
      applications and I also developed some mobile apps using android studio
      with java. I did lots of console applications like calculating the
      shortest path using Dijkstras algorithm shortest path algorithm. I did
      lots of projects which are related with C#. Some of them are -Data mining
      prediction WPF application -Encryption decryption tool -Rent a car project
      WPF application. I developed a web application called Shift Planner using
      React. Shift Planner is a web application which automatically assigns
      shifts to workers using its own algorithm which is developed by myself as
      well.
    </div>
  );
}

export default About;
