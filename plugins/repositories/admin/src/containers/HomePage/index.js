import React, { useState, useEffect, memo } from "react";
import { Header } from "@buffetjs/custom";
import { Table } from "@buffetjs/core";
import styled from "styled-components";
import axios from "axios";

const Wrapper = styled.div`
  padding: 18px 30px;

  p {
    margin-top: auto;
  }
`;

const HomePage = () => {
  const [rows, setRows] = useState([]);
  useEffect(() => {
    axios
      .get("https://api.github.com/users/fernandobcc/repos")
      .then(res => {
          const data = res.data.filter(
            project => ['boilerplate', 'won-api', 'won'].includes(project.name)
          )
          setRows(data)
        }
      )
      .catch(e =>
        strapi.notification.error(`Ops...github API error, ${e}.`)
      );
  }, []);

  const headers = [
    {
      name: "Name",
      value: "name",
    },
    {
      name: "Description",
      value: "description",
    },
    {
      name: "Url",
      value: "html_url",
    },
  ];
  

  return (
    <Wrapper>
      <Header
        title={{ label: "Won Game Repositories" }}
        content="Won Game Repositories"
      />
      <Table headers={headers} rows={rows} />
    </Wrapper>
  );
};

export default memo(HomePage);
