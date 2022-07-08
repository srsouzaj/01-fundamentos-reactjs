import { Header } from "./components/Header/Header";
import "./global.css";
import styles from "./App.module.css";
import { Post } from "./components/Post/Post";
import { Sidebar } from "./components/Sidebar/Sidebar";

const post = [
  {
    id: 1,
    author: {
      avatarUrl: "https://github.com/srsouzaj.png",
      name: "Jorge de Souza",
      role: "Frontend Software Engineer",
    },
    content: [
      {
        type: "paragraph",
        content:
          "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀",
      },
      { type: "link", content: "jane.design/doctorcare" },
    ],
    publishedAt: new Date("22-05-03 20:00:03"),
  },
  {
    id: 2,
    author: {
      avatarUrl: "https://github.com/diego3g.png",
      name: "Diego Fernandes",
      role: "CTO - Rocketseat",
    },
    content: [
      {
        type: "paragraph",
        content:
          "Tô gravando os conteúdos novos do Ignite e tá ficando 'delicinha' - como diria meu outro eu. Espero que curtam",
      },
      { type: "link", content: "app.rocketseat.com" },
    ],
    publishedAt: new Date("18-05-03 20:00:03"),
  },
];

function App() {
  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {post.map((item) => {
            return (
              <Post
                author={item.author}
                publishedAt={item.publishedAt}
                key={item.id}
              />
            );
          })}
        </main>
      </div>
    </>
  );
}

export default App;
