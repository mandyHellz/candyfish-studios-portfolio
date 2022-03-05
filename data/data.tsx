import { v4 as uuidv4 } from "uuid";

function Data() {
  return [
    {
      id: uuidv4(),
      title: "The Athlete",
      mainImg:
        "https://github.com/developedbyed/the-creative-react-course-capture/blob/master/src/img/athlete-small.png?raw=true",
      secondaryImg:
        "https://github.com/developedbyed/the-creative-react-course-capture/blob/master/src/img/athlete2.png?raw=true",
      url: "/work/the-athlete",
      awards: [
        {
          id: uuidv4(),
          title: "Truly a masterpiece",
          description:
            "“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”",
        },
        {
          id: uuidv4(),
          title: "Incredible and colorful",
          description:
            "“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”",
        },
        {
          id: uuidv4(),
          title: "Dream landscape ",
          description:
            "“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”",
        },
      ],
    },
    {
      id: uuidv4(),
      title: "Good Times",
      mainImg:
        "https://github.com/developedbyed/the-creative-react-course-capture/blob/master/src/img/goodtimes-small.png?raw=true",
      url: "/work/good-times",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos quisquam ducimus esse possimus dolores? Qui nulla reiciendis quibusdam accusamus repellendus!",
      secondaryImg:
        "https://github.com/developedbyed/the-creative-react-course-capture/blob/master/src/img/good-times2.jpg?raw=true",
      awards: [
        {
          id: uuidv4(),
          title: "Truly A masterpiece",
          description:
            "“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”",
        },
        {
          id: uuidv4(),
          title: "Fresh look on a brutal sport.",
          description:
            "“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”",
        },
        {
          id: uuidv4(),
          title: "It’s okay lmao.",
          description:
            "“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”",
        },
      ],
    },
    {
      id: uuidv4(),
      title: "The Racer",
      mainImg:
        "https://github.com/developedbyed/the-creative-react-course-capture/blob/master/src/img/theracer-small.png?raw=true",
      url: "/work/the-racer",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos quisquam ducimus esse possimus dolores? Qui nulla reiciendis quibusdam accusamus repellendus!",
      secondaryImg:
        "https://github.com/developedbyed/the-creative-react-course-capture/blob/master/src/img/the-racer2.jpg?raw=true",
      awards: [
        {
          id: uuidv4(),
          title: "Truly A masterpiece",
          description:
            "“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”",
        },
        {
          id: uuidv4(),
          title: "Fresh look on a brutal sport.",
          description:
            "“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”",
        },
        {
          id: uuidv4(),
          title: "It’s okay lmao.",
          description:
            "“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”",
        },
      ],
    },
  ];
}

export default Data;
