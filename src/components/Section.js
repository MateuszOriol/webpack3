import React from "react";

function Section({ data }) {
  return (
    <section>
      {data.map((item, index) => (
        <div key={index}>
          <h3>{item.browser}</h3>
          <img
            src={item.logo}
            alt={item.browser}
            style={{ width: "200px", height: "200px" }}
          />
          <p>{item.description}</p>
        </div>
      ))}
    </section>
  );
}

export default Section;
