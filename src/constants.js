import logo from './logo.svg';
import images from './logo.svg';
import school from './img/dislike.png';

const constants = {
    cities: [
        {
            id: 1,
            title: 'Барселона',
            src: school ,
            btnClass: 'btn btn-info',
            buttonTitle:'Больше информации',
            description:`Шко́ла (от др.-греч. σχολή, σχολά — досуг, учебное занятие, школа) — 
                учебное заведение для получения общего образования. В широком смысле слово может применяться к 
                названию любого образовательного учреждения (музыкальная школа, художественная школа, спортивная школа
                — ДЮСШ, школа боевых искусств и т. д.`,
            likes: 0,
            dislikes: 0
        },{
            id: 2,
            title: 'Монреаль',
            src: images ,
            btnClass: 'btn btn-success',
            buttonTitle:"Больше информации",
            description:`Университе́т (от нем. Universität, которое, в свою очередь, произошло от лат. 
                universitas — совокупность, общность) — высшее учебное заведение, где готовятся специалисты по 
                фундаментальным и многим прикладным наукам. Как правило, осуществляет и научно-исследовательскую 
                работу. Многие современные университеты действуют как учебно-научно-практические комплексы. 
                Университеты объединяют в своём составе несколько факультетов, на которых представлена совокупность 
                различных дисциплин, составляющих основы научного знания.`,
            likes: 0,
            dislikes: 0
        },
        {
            id: 3,
            title: 'Львов',
            src: logo ,
            btnClass: 'btn btn-primary',
            buttonTitle: "Больше информации",
            description:`React (иногда React.js или ReactJS) — JavaScript-библиотека[4] с открытым исходным 
                кодом для разработки пользовательских интерфейсов. React разрабатывается и поддерживается Facebook, 
                Instagram и сообществом отдельных разработчиков и корпораций.
                React может использоваться для разработки одностраничных и мобильных приложений. 
                Его цель — предоставить высокую скорость, простоту и масштабируемость. 
                В качестве библиотеки для разработки пользовательских интерфейсов React часто используется с 
                другими библиотеками, такими как Redux.`,
            likes: 0,
            dislikes: 0
        },
        {
            id: 4,
            title: 'Ханой',
            src: logo ,
            btnClass: 'btn btn-primary',
            buttonTitle: "Больше информации",
            description:`React (иногда React.js или ReactJS) — JavaScript-библиотека[4] с открытым исходным 
                кодом для разработки пользовательских интерфейсов. React разрабатывается и поддерживается Facebook, 
                Instagram и сообществом отдельных разработчиков и корпораций.
                React может использоваться для разработки одностраничных и мобильных приложений. 
                Его цель — предоставить высокую скорость, простоту и масштабируемость. 
                В качестве библиотеки для разработки пользовательских интерфейсов React часто используется с 
                другими библиотеками, такими как Redux.`,
            likes: 0,
            dislikes: 0
        }
    ]
};

export default constants;