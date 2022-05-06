import "./db";
import "./models/Custom";
import "regenerator-runtime";
import app from "./server";

const PORT = process.env.PORT || 8080;
const hostname = `10.178.0.6`;

app.listen(PORT, function () {
    console.log(`서버 실행 포트는 ${PORT}번 입니다🚀`)
});