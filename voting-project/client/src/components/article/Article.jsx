import React from "react";
import StudentCard from "../cards/StudentCard";
import { ContainerStyles,ContainerRow } from "./styles";

const Article = () => {
  return (
    <ContainerStyles>
      <ContainerRow>
        <StudentCard
          name="João"
          age={20}
          image="https://media.istockphoto.com/id/1438969575/pt/foto/smiling-young-male-college-student-wearing-headphones-standing-in-a-classroom.jpg?s=612x612&w=0&k=20&c=d17Mgw8VYi53CxtpFevswu5ieaTwU2_--Qr8eqae_a8="
        />
        <StudentCard
          name="João"
          age={20}
          image="https://media.istockphoto.com/id/1438969575/pt/foto/smiling-young-male-college-student-wearing-headphones-standing-in-a-classroom.jpg?s=612x612&w=0&k=20&c=d17Mgw8VYi53CxtpFevswu5ieaTwU2_--Qr8eqae_a8="
        />
        <StudentCard
          name="João"
          age={20}
          image="https://media.istockphoto.com/id/1438969575/pt/foto/smiling-young-male-college-student-wearing-headphones-standing-in-a-classroom.jpg?s=612x612&w=0&k=20&c=d17Mgw8VYi53CxtpFevswu5ieaTwU2_--Qr8eqae_a8="
        />
      </ContainerRow>
      <ContainerRow>
        <StudentCard
          name="João"
          age={20}
          image="https://media.istockphoto.com/id/1438969575/pt/foto/smiling-young-male-college-student-wearing-headphones-standing-in-a-classroom.jpg?s=612x612&w=0&k=20&c=d17Mgw8VYi53CxtpFevswu5ieaTwU2_--Qr8eqae_a8="
        />
        <StudentCard
          name="João"
          age={20}
          image="https://media.istockphoto.com/id/1438969575/pt/foto/smiling-young-male-college-student-wearing-headphones-standing-in-a-classroom.jpg?s=612x612&w=0&k=20&c=d17Mgw8VYi53CxtpFevswu5ieaTwU2_--Qr8eqae_a8="
        />

        <StudentCard
          name="João"
          age={20}
          image="https://media.istockphoto.com/id/1438969575/pt/foto/smiling-young-male-college-student-wearing-headphones-standing-in-a-classroom.jpg?s=612x612&w=0&k=20&c=d17Mgw8VYi53CxtpFevswu5ieaTwU2_--Qr8eqae_a8="
        />
      </ContainerRow>
    </ContainerStyles>
  );
};

export default Article;
