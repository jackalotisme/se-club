import { useState } from "react";
import React from "react";

function MemberCard() {

  const seedMemberData = [
    {id: 1, name: 'Melissa Elizondo', bio: '☀️♈ ● 🌙♈ ● ⬆️♊ ● ENTP ● I like coding :p ', image: 'https://i.pinimg.com/enabled_hi/564x/64/8b/bf/648bbfd67197bd5d2beacd9de37f608d.jpg' },
    {id: 2, name: 'Elissa Ayalem Fonseca Saybe', bio: '(っ◔◡◔)っ ♡ it’s a perfect love ♡ she/they', image: 'https://pbs.twimg.com/media/GZ7_h9nb0AIg_It?format=jpg&name=4096x4096' },
    {id: 3, name: 'Kiana Leal', bio: "yup this is the bio, that's it" , image: 'https://i.pinimg.com/736x/1b/6c/dc/1b6cdcb0ca861bd72c795a165e29247c.jpg' },
  ]

  const populateMembers = seedMemberData.map((member) => 
    <div>
      <div class="p-2">
        <div class="content-center ">
      <img class="h-44 w-44 rounded-full object-cover mx-auto" src= {member.image}></img>
      <p class="text-center p-4" > {member.name} </p>
      </div>
        </div>
    </div>
  )

  return (
    <section id="events" className="w-full py-12 md:py-24 lg:py-32">

    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8">Members</h2>
      {/* <div class="self-auto"> */}
      <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 content-center">
      {populateMembers}
      {/* </div> */}
    </div>
    </section>
  )
}

export default MemberCard 