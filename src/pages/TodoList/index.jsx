import React, { PureComponent } from "react";
import { Card, Button } from "antd";
import { connect } from "dva";
import style from "./style.less";
const earth = require("@/assert/images/Earth and Moon.jpg");

const { Meta } = Card;

@connect(({ todoList, loading }) => ({
  todoList,
  fetchTodoListLoading: loading.effects["todoList/fetchTodoList"]
}))
export default class TodoList extends PureComponent {
  fetchTodoList = () => {
    this.props.dispatch({
      type: "todoList/fetchTodoList",
      payload: { time: Date.now() }
    });
  };

  onClear = () => {
    this.props.dispatch({
      type: "todoList/setTodoList",
      payload: { data: [] }
    });
  };

  render() {
    const {
      location: { pathname, query },
      todoList: { data = [] },
      fetchTodoListLoading
    } = this.props;

    return (
      <Card>
        <p className={style.currentPath}>current path : {pathname}</p>
        <p className={style.queryParams}>
          query params: {JSON.stringify(query)}
        </p>
        <br />
        {data.length > 0 ? (
          <Card
            hoverable
            style={{ width: 240 }}
            cover={<img alt="example" src={earth} />}
            actions={[
              <Button
                onClick={this.onClear}
                type="danger"
                shape="circle"
                icon="close"
              />
            ]}
          >
            {data.map(item => (
              <Meta key={item.time} title={item.time} description={item.text} />
            ))}
          </Card>
        ) : (
          <Button
            onClick={this.fetchTodoList}
            loading={fetchTodoListLoading}
            type="primary"
          >
            fetch TodoList
          </Button>
        )}
      </Card>
    );
  }
}
