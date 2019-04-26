export default {
  "GET /api/todolist": function(request, response) {
    response.json({
      code: "000",
      msg: "success",
      data: [
        {
          text: "buy air ticket",
          time: "2019-03-11"
        },
        {
          text: "buy some apples",
          time: "2019-03-21"
        }
      ]
    });
  }
};
