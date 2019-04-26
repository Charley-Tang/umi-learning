import React from "react";
import router from "umi/router";
import { Card, Button } from "antd";

const earth = require("@/assert/images/Earth and Moon.jpg");
import titleTool from "@/util/titleTool";

export default function(props) {
  function goTodoList() {
    router.push({
      pathname: "/todoList",
      query: {
        fromPath: location.href
      }
    });
  }

  return (
    <Card>
      {titleTool.center(
        <img
          style={{
            maxHeight: 500
          }}
          src={earth}
        />
      )}
      <br />
      {titleTool.center(
        <Card>
          <Button onClick={goTodoList} type="primary">
            go todoList
          </Button>
        </Card>
      )}
    </Card>
  );
}
