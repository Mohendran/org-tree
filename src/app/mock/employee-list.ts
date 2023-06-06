import { Employee, Team } from "../types/Employee";

export const employees: Employee[] = [{
    Name: 'Nick Fury',
    ID: 1,
    Team: Team.Management,
    Manager: null,
    Designation: "CEO",
    Photo: 'https://hips.hearstapps.com/hmg-prod/images/nick-fury-eye-1552397861.jpg?crop=0.488xw:0.976xh;0,0&resize=1200:*'
}, {
    Name: 'Tony Stark',
    ID: 2,
    Team: Team.FrontEnd,
    Manager: 1,
    Designation: "Director",
    Photo: 'https://www.takely.com.bd/public/uploads/all/k8BR9eFQ9YkZOkP7hV1x7SEeZWbMoS1VNXrLxSWN.jpg'

}, {
    Name: 'Steve Rogers',
    ID: 3,
    Team: Team.BackEnd,
    Manager: 1,
    Designation: "Director",
    Photo: 'https://i.pinimg.com/originals/09/3a/77/093a779d6bb063f2b965054a16738551.jpg'
}, {
    Name: 'Peter Parker',
    ID: 4,
    Team: Team.FrontEnd,
    Manager: 2,
    Designation: "Developer",
    Photo: 'https://pbs.twimg.com/media/E8cP7srVcAAT_mU?format=jpg&name=large'
}, {
    Name: 'Scott Lang',
    ID: 5,
    Team: Team.FrontEnd,
    Manager: 2,
    Designation: "Designer",
    Photo: 'https://pyxis.nymag.com/v1/imgs/037/9f9/93bdf47f91e43fbfbcdd253c470a3b47aa-ant-man-wasp.1x.rsquare.w1400.jpg'
}, {
    Name: 'Dr.Strange',
    ID: 6,
    Team: Team.Management,
    Manager: 3,
    Designation: "Magician",
    Photo: 'https://pbs.twimg.com/media/C1ffu8EUcAAI6M6?format=jpg&name=medium'
}, {
    Name: 'Natasha',
    ID: 7,
    Team: Team.BackEnd,
    Manager: 3,
    Designation: "Spy",
    Photo: 'https://hips.hearstapps.com/hmg-prod/images/black-widow-scarlett-johansson-marvel-1559233664.jpg?crop=0.670xw:1.00xh;0.228xw,0&resize=2048:*'
}, {
    Name: 'Thor Odinson',
    ID: 8,
    Team: Team.BackEnd,
    Manager: 6,
    Designation: "God of Thunder",
    Photo: 'https://pbs.twimg.com/profile_images/934929505105223680/47b_TMpE_400x400.jpg'
}, {
    Name: 'Bruce Banner',
    ID: 9,
    Team: Team.FrontEnd,
    Manager: 6,
    Designation: "Scientist",
    Photo: 'https://pbs.twimg.com/profile_images/2732115761/625134a71e36d8396b0675f0393cb6bd_400x400.jpeg'
}, {
    Name: 'Clint Barton',
    ID: 10,
    Team: Team.BackEnd,
    Manager: 7,
    Designation: "Archer",
    Photo: 'https://pbs.twimg.com/profile_images/1465486982755323904/ISX0pd7Q_400x400.jpg'
}, {
    Name: 'Wanda',
    ID: 11,
    Team: Team.FrontEnd,
    Manager: 6,
    Designation: "Reality Warper",
    Photo: 'https://scontent.fmaa1-4.fna.fbcdn.net/v/t39.30808-6/227181138_1017036585710130_7859251180847012366_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=0xoj5_Bs2_gAX_LHr8G&_nc_ht=scontent.fmaa1-4.fna&oh=00_AfDa2Y9BikR_SkFbND1zRGLUIrNhLNAF1ENX5xX22olerw&oe=647E0F58'
}, {
    Name: 'TChalla',
    ID: 13,
    Team: Team.BackEnd,
    Manager: 2,
    Designation: "King",
    Photo: 'https://scontent.fmaa1-3.fna.fbcdn.net/v/t39.30808-6/255766386_269309715210351_5654863375044861007_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=MPDnaK3wdl4AX-TmMWx&_nc_ht=scontent.fmaa1-3.fna&oh=00_AfDyYb9cradym9Z2ENc--W5EbivhFFrat_P0UarPIlXY3Q&oe=647ECC73'
}];