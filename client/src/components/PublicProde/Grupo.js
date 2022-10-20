import React, { useEffect, useState } from 'react';
import BasicTable from './Tabla';
import Partido from './Partido';
import style from './Grupo.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { getGroupTeams, getGroupGames, cleanGames, cleanTeams } from '../../redux/actions';
import Loading2 from '../Loading/Loading2';


function Grupo({group, setGroup}) {

  const games = useSelector(state=> state.games);
  const dispatch = useDispatch();
  const [isModify, setIsModify] = useState(false);
  // const teams = useSelector(state=> state.teams);
  const [width, setWidth] = useState(window.innerWidth);
  const [loading, setLoading] = useState(true);
  const [loading2, setLoading2] = useState(true);

  useEffect(() => {
    window.addEventListener("resize", handleResize, false);
  }, []);

  const handleResize = () => {
    setWidth(window.innerWidth);
  };


  function toNextGroup() {
    if(group === "A") setGroup("B");
    if(group === "B") setGroup("C");
    if(group === "C") setGroup("D");
    if(group === "D") setGroup("E");
    if(group === "E") setGroup("F");
    if(group === "F") setGroup("G");
    if(group === "G") setGroup("H");
    if(group === "H") setGroup("Octavos de Final");
    if(group === "Octavos de Final") setGroup("Cuartos de Final");
    if(group === "Cuartos de Final") setGroup("Semifinales");
    if(group === "Semifinales") setGroup("Final y Tercer Puesto");
  }

  function toPrevGroup() {
    if(group === "B") setGroup("A");
    if(group === "C") setGroup("B");
    if(group === "D") setGroup("C");
    if(group === "E") setGroup("D");
    if(group === "F") setGroup("E");
    if(group === "G") setGroup("F");
    if(group === "H") setGroup("G");
    if(group === "Octavos de Final") setGroup("H");
    if(group === "Cuartos de Final") setGroup("Octavos de Final");
    if(group === "Semifinales") setGroup("Cuartos de Final");
    if(group === "Final y Tercer Puesto") setGroup("Semifinales");
  }

  // eslint-disable-next-line
  let [teams2, setTeams2] = useState([
    {   
      id: "QAT",
      name: "Qatar",
      img: "https://flagcdn.com/qa.svg",
      game1: [null, null],
      game2: [null, null],
      game3: [null, null],
      totalGames: 0,
      points: 0,
      goalsF: 0,
      goalsC: 0,
      difGoals: 0,
      wins: 0,
      draws: 0,
      loses: 0,
      group: "A"
  },
    {   
      id: "ECU",
      name: "Ecuador",
      img: "https://flagcdn.com/ec.svg",
      game1: [null, null],
      game2: [null, null],
      game3: [null, null],
      totalGames: 0,
      points: 0,
      goalsF: 0,
      goalsC: 0,
      difGoals: 0,
      wins: 0,
      draws: 0,
      loses: 0,
      group: "A"
  },
    {   
      id: "SEN",
      name: "Senegal",
      img: "https://flagcdn.com/sn.svg",
      game1: [null, null],
      game2: [null, null],
      game3: [null, null],
      totalGames: 0,
      points: 0,
      goalsF: 0,
      goalsC: 0,
      difGoals: 0,
      wins: 0,
      draws: 0,
      loses: 0,
      group: "A"
  },
    {   
      id: "NED",
      name: "Paises Bajos",
      img: "https://flagcdn.com/nl.svg",
      game1: [null, null],
      game2: [null, null],
      game3: [null, null],
      totalGames: 0,
      points: 0,
      goalsF: 0,
      goalsC: 0,
      difGoals: 0,
      wins: 0,
      draws: 0,
      loses: 0,
      group: "A"
  },
    {   
      id: "ENG",
      name: "Inglaterra",
      img: "https://upload.wikimedia.org/wikipedia/commons/b/be/Flag_of_England.svg",
      game1: [null, null],
      game2: [null, null],
      game3: [null, null],
      totalGames: 0,
      points: 0,
      goalsF: 0,
      goalsC: 0,
      difGoals: 0,
      wins: 0,
      draws: 0,
      loses: 0,
      group: "B"
  },
    {   
      id: "IRN",
      name: "Irán",
      img: "https://flagcdn.com/ir.svg",
      game1: [null, null],
      game2: [null, null],
      game3: [null, null],
      totalGames: 0,
      points: 0,
      goalsF: 0,
      goalsC: 0,
      difGoals: 0,
      wins: 0,
      draws: 0,
      loses: 0,
      group: "B"
  },
    {   
      id: "USA",
      name: "Estados Unidos",
      img: "https://flagcdn.com/us.svg",
      game1: [null, null],
      game2: [null, null],
      game3: [null, null],
      totalGames: 0,
      points: 0,
      goalsF: 0,
      goalsC: 0,
      difGoals: 0,
      wins: 0,
      draws: 0,
      loses: 0,
      group: "B"
  },
    {   
      id: "WAL",
      name: "Gales",
      img: "https://upload.wikimedia.org/wikipedia/commons/d/dc/Flag_of_Wales.svg",
      game1: [null, null],
      game2: [null, null],
      game3: [null, null],
      totalGames: 0,
      points: 0,
      goalsF: 0,
      goalsC: 0,
      difGoals: 0,
      wins: 0,
      draws: 0,
      loses: 0,
      group: "B"
  },
    {   
      id: "ARG",
      name: "Argentina",
      img: "https://flagcdn.com/ar.svg",
      game1: [null, null],
      game2: [null, null],
      game3: [null, null],
      totalGames: 0,
      points: 0,
      goalsF: 0,
      goalsC: 0,
      difGoals: 0,
      wins: 0,
      draws: 0,
      loses: 0,
      group: "C"
  },
    {   
      id: "KSA",
      name: "Arabia Saudita",
      img: "https://flagcdn.com/sa.svg",
      game1: [null, null],
      game2: [null, null],
      game3: [null, null],
      totalGames: 0,
      points: 0,
      goalsF: 0,
      goalsC: 0,
      difGoals: 0,
      wins: 0,
      draws: 0,
      loses: 0,
      group: "C"
  },
    {   
      id: "MEX",
      name: "Mexico",
      img: "https://flagcdn.com/mx.svg",
      game1: [null, null],
      game2: [null, null],
      game3: [null, null],
      totalGames: 0,
      points: 0,
      goalsF: 0,
      goalsC: 0,
      difGoals: 0,
      wins: 0,
      draws: 0,
      loses: 0,
      group: "C"
  },
    {   
      id: "POL",
      name: "Polonia",
      img: "https://flagcdn.com/pl.svg",
      game1: [null, null],
      game2: [null, null],
      game3: [null, null],
      totalGames: 0,
      points: 0,
      goalsF: 0,
      goalsC: 0,
      difGoals: 0,
      wins: 0,
      draws: 0,
      loses: 0,
      group: "C"
  },
    {   
      id: "FRA",
      name: "Francia",
      img: "https://flagcdn.com/fr.svg",
      game1: [null, null],
      game2: [null, null],
      game3: [null, null],
      totalGames: 0,
      points: 0,
      goalsF: 0,
      goalsC: 0,
      difGoals: 0,
      wins: 0,
      draws: 0,
      loses: 0,
      group: "D"
  },
    {   
      id: "DEN",
      name: "Dinamarca",
      img: "https://flagcdn.com/dk.svg",
      game1: [null, null],
      game2: [null, null],
      game3: [null, null],
      totalGames: 0,
      points: 0,
      goalsF: 0,
      goalsC: 0,
      difGoals: 0,
      wins: 0,
      draws: 0,
      loses: 0,
      group: "D"
  },
    {   
      id: "TUN",
      name: "Tunez",
      img: "https://flagcdn.com/tn.svg",
      game1: [null, null],
      game2: [null, null],
      game3: [null, null],
      totalGames: 0,
      points: 0,
      goalsF: 0,
      goalsC: 0,
      difGoals: 0,
      wins: 0,
      draws: 0,
      loses: 0,
      group: "D"
  },
    {   
      id: "AUS",
      name: "Australia",
      img: "https://flagcdn.com/au.svg",
      game1: [null, null],
      game2: [null, null],
      game3: [null, null],
      totalGames: 0,
      points: 0,
      goalsF: 0,
      goalsC: 0,
      difGoals: 0,
      wins: 0,
      draws: 0,
      loses: 0,
      group: "D"
  },
    {   
      id: "ESP",
      name: "España",
      img: "https://flagcdn.com/es.svg",
      game1: [null, null],
      game2: [null, null],
      game3: [null, null],
      totalGames: 0,
      points: 0,
      goalsF: 0,
      goalsC: 0,
      difGoals: 0,
      wins: 0,
      draws: 0,
      loses: 0,
      group: "E"
  },
    {   
      id: "GER",
      name: "Alemania",
      img: "https://flagcdn.com/de.svg",
      game1: [null, null],
      game2: [null, null],
      game3: [null, null],
      totalGames: 0,
      points: 0,
      goalsF: 0,
      goalsC: 0,
      difGoals: 0,
      wins: 0,
      draws: 0,
      loses: 0,
      group: "E"
  },
    {   
      id: "JPN",
      name: "Japón",
      img: "https://flagcdn.com/jp.svg",
      game1: [null, null],
      game2: [null, null],
      game3: [null, null],
      totalGames: 0,
      points: 0,
      goalsF: 0,
      goalsC: 0,
      difGoals: 0,
      wins: 0,
      draws: 0,
      loses: 0,
      group: "E"
  },
    {   
      id: "CRC",
      name: "Costa Rica",
      img: "https://flagcdn.com/cr.svg",
      game1: [null, null],
      game2: [null, null],
      game3: [null, null],
      totalGames: 0,
      points: 0,
      goalsF: 0,
      goalsC: 0,
      difGoals: 0,
      wins: 0,
      draws: 0,
      loses: 0,
      group: "E"
  },
    {   
      id: "BEL",
      name: "Bélgica",
      img: "https://flagcdn.com/be.svg",
      game1: [null, null],
      game2: [null, null],
      game3: [null, null],
      totalGames: 0,
      points: 0,
      goalsF: 0,
      goalsC: 0,
      difGoals: 0,
      wins: 0,
      draws: 0,
      loses: 0,
      group: "F"
  },
    {   
      id: "CAN",
      name: "Canadá",
      img: "https://flagcdn.com/ca.svg",
      game1: [null, null],
      game2: [null, null],
      game3: [null, null],
      totalGames: 0,
      points: 0,
      goalsF: 0,
      goalsC: 0,
      difGoals: 0,
      wins: 0,
      draws: 0,
      loses: 0,
      group: "F"
  },
   {   
      id: "MAR",
      name: "Marruecos",
      img: "https://flagcdn.com/ma.svg",
      game1: [null, null],
      game2: [null, null],
      game3: [null, null],
      totalGames: 0,
      points: 0,
      goalsF: 0,
      goalsC: 0,
      difGoals: 0,
      wins: 0,
      draws: 0,
      loses: 0,
      group: "F"
  },
    {   
      id: "CRO",
      name: "Croacia",
      img: "https://flagcdn.com/hr.svg",
      game1: [null, null],
      game2: [null, null],
      game3: [null, null],
      totalGames: 0,
      points: 0,
      goalsF: 0,
      goalsC: 0,
      difGoals: 0,
      wins: 0,
      draws: 0,
      loses: 0,
      group: "F"
  },
    {   
      id: "BRA",
      name: "Brasil",
      img: "https://flagcdn.com/br.svg",
      game1: [null, null],
      game2: [null, null],
      game3: [null, null],
      totalGames: 0,
      points: 0,
      goalsF: 0,
      goalsC: 0,
      difGoals: 0,
      wins: 0,
      draws: 0,
      loses: 0,
      group: "G"
  },
   {   
      id: "SRB",
      name: "Serbia",
      img: "https://flagcdn.com/rs.svg",
      game1: [null, null],
      game2: [null, null],
      game3: [null, null],
      totalGames: 0,
      points: 0,
      goalsF: 0,
      goalsC: 0,
      difGoals: 0,
      wins: 0,
      draws: 0,
      loses: 0,
      group: "G"
  },
   {   
      id: "SUI",
      name: "Suiza",
      img: "https://flagcdn.com/ch.svg",
      game1: [null, null],
      game2: [null, null],
      game3: [null, null],
      totalGames: 0,
      points: 0,
      goalsF: 0,
      goalsC: 0,
      difGoals: 0,
      wins: 0,
      draws: 0,
      loses: 0,
      group: "G"
  },
  {   
      id: "CMR",
      name: "Camerún",
      img: "https://flagcdn.com/cm.svg",
      game1: [null, null],
      game2: [null, null],
      game3: [null, null],
      totalGames: 0,
      points: 0,
      goalsF: 0,
      goalsC: 0,
      difGoals: 0,
      wins: 0,
      draws: 0,
      loses: 0,
      group: "G"
  },
  {   
      id: "POR",
      name: "Portugal",
      img: "https://flagcdn.com/pt.svg",
      game1: [null, null],
      game2: [null, null],
      game3: [null, null],
      totalGames: 0,
      points: 0,
      goalsF: 0,
      goalsC: 0,
      difGoals: 0,
      wins: 0,
      draws: 0,
      loses: 0,
      group: "H"
  },
  {   
      id: "GHA",
      name: "Ghana",
      img: "https://flagcdn.com/gh.svg",
      game1: [null, null],
      game2: [null, null],
      game3: [null, null],
      totalGames: 0,
      points: 0,
      goalsF: 0,
      goalsC: 0,
      difGoals: 0,
      wins: 0,
      draws: 0,
      loses: 0,
      group: "H"
  },
  {   
      id: "URU",
      name: "Uruguay",
      img: "https://flagcdn.com/uy.svg",
      game1: [null, null],
      game2: [null, null],
      game3: [null, null],
      totalGames: 0,
      points: 0,
      goalsF: 0,
      goalsC: 0,
      difGoals: 0,
      wins: 0,
      draws: 0,
      loses: 0,
      group: "H"
  },
  {   
      id: "KOR",
      name: "Corea del Sur",
      img: "https://flagcdn.com/kr.svg",
      game1: [null, null],
      game2: [null, null],
      game3: [null, null],
      totalGames: 0,
      points: 0,
      goalsF: 0,
      goalsC: 0,
      difGoals: 0,
      wins: 0,
      draws: 0,
      loses: 0,
      group: "H"
  }
])

// eslint-disable-next-line
let [games2, setGames2] = useState([
  {
    id: 1,
    stadium: "Al Bayt",
    date: "2022/11/20 13:00:00.59",
    local: "QAT",
    away: "ECU",
    position: 'game1',
    group: 'A'
},
{
    id: 2,
    stadium: "Khalifa Inernational",
    date: "2022/11/21 10:00:00.59",
    local: "ENG",
    away: "IRN",
    position: 'game1',
    group: 'B',
  },
  {
    id: 3,
    stadium: "Al Thumama",
    date: "2022/11/21 13:00:00.59",
    local: "SEN",
    away: "NED",
    position: 'game1',
    group: 'A',
  },
  {
    id: 4,
    stadium: "Ahmad Bin Ali",
    date: "2022/11/21 16:00:00.59",
    local: "USA",
    away: "WAL",
    position: 'game1',
    group: 'B',
  },
  {
    id: 5,
    stadium: "Lusail Stadium",
    date: "2022/11/22 07:00:00.59",
    local: "ARG",
    away: "KSA",
    position: 'game1',
    group: 'C',
  },
  {
    id: 6,
    stadium: "Education City",
    date: "2022/11/22 10:00:00.59",
    local: "DEN",
    away: "TUN",
    position: 'game1',
    group: 'D',
  },
  {
    id: 7,
    stadium: "Stadium 974",
    date: "2022/11/22 13:00:00.59",
    local: "MEX",
    away: "POL",
    position: 'game1',
    group: 'C',
  },
  {
    id: 8,
    stadium: "Al Janoub",
    date: "2022/11/22 16:00:00.59",
    local: "FRA",
    away: "AUS",
    position: 'game1',
    group: 'D',
  },
  {
    id: 9,
    stadium: "Al Bayt",
    date: "2022/11/23 07:00:00.59",
    local: "MAR",
    away: "CRO",
    position: 'game1',
    group: 'F',
  },
  {
    id: 10,
    stadium: "Khalifa International",
    date: "2022/11/23 10:00:00.59",
    local: "GER",
    away: "JPN",
    position: 'game1',
    group: 'E',
  },
  {
    id: 11,
    stadium: "Al Thumama",
    date: "2022/11/23 13:00:00.59",
    local: "ESP",
    away: "CRC",
    position: 'game1',
    group: 'E',
  },
  {
    id: 12,
    stadium: "Ahmad Bin Ali",
    date: "2022/11/23 16:00:00.59",
    local: "BEL",
    away: "CAN",
    position: 'game1',
    group: 'F',
  },
  {
    id: 13,
    stadium: "Al Janoub",
    date: "2022/11/24 07:00:00.59",
    local: "SUI",
    away: "CMR",
    position: 'game1',
    group: 'G',
  },
  {
    id: 14,
    stadium: "Education City",
    date: "2022/11/24 10:00:00.59",
    local: "URU",
    away: "KOR",
    position: 'game1',
    group: 'H',
  },
  {
    id: 15,
    stadium: "Stadium 974",
    date: "2022/11/24 13:00:00.59",
    local: "POR",
    away: "GHA",
    position: 'game1',
    group: 'H',
  },
  {
    id: 16,
    stadium: "Lusail Stadium",
    date: "2022/11/24 16:00:00.59",
    local: "BRA",
    away: "SRB",
    position: 'game1',
    group: 'G',
  },
  {
    id: 17,
    stadium: "Ahmad Bin Ali",
    date: "2022/11/25 07:00:00.59",
    local: "WAL",
    away: "IRN",
    position: 'game2',
    group: 'B',
  },
  {
    id: 18,
    stadium: "Al Thumama",
    date: "2022/11/25 10:00:00.59",
    local: "QAT",
    away: "SEN",
    position: 'game2',
    group: 'A',
  },
  {
    id: 19,
    stadium: "Khalifa International",
    date: "2022/11/25 13:00:00.59",
    local: "NED",
    away: "ECU",
    position: 'game2',
    group: 'A',
  },
  {
    id: 20,
    stadium: "Ahmad Bin Ali",
    date: "2022/11/25 16:00:00.59",
    local: "ENG",
    away: "USA",
    position: 'game2',
    group: 'B',
  },
  {
    id: 21,
    stadium: "Al Janoub",
    date: "2022/11/26 07:00:00.59",
    local: "TUN",
    away: "AUS",
    position: 'game2',
    group: 'D',
  },
  {
    id: 22,
    stadium: "Education City",
    date: "2022/11/26 10:00:00.59",
    local: "POL",
    away: "KSA",
    position: 'game2',
    group: 'C',
  },
  {
    id: 23,
    stadium: "Stadium 974",
    date: "2022/11/26 13:00:00.59",
    local: "FRA",
    away: "DEN",
    position: 'game2',
    group: 'D',
  },
  {
    id: 24,
    stadium: "Lusail Stadium",
    date: "2022/11/26 16:00:00.59",
    local: "ARG",
    away: "MEX",
    position: 'game2',
    group: 'C',
  },
  {
    id: 25,
    stadium: "Ahmad Bin Ali",
    date: "2022/11/27 07:00:00.59",
    local: "JPN",
    away: "CRC",
    position: 'game2',
    group: 'E',
  },
  {
    id: 26,
    stadium: "Al Thumama",
    date: "2022/11/27 10:00:00.59",
    local: "BEL",
    away: "MAR",
    position: 'game2',
    group: 'F',
  },
  {
    id: 27,
    stadium: "Khalifa International",
    date: "2022/11/27 13:00:00.59",
    local: "CRO",
    away: "CAN",
    position: 'game2',
    group: 'F',
  },
  {
    id: 28,
    stadium: "Al Bayt",
    date: "2022/11/27 16:00:00.59",
    local: "ESP",
    away: "GER",
    position: 'game2',
    group: 'E',
  },
  {
    id: 29,
    stadium: "Al Janoub",
    date: "2022/11/28 07:00:00.59",
    local: "CMR",
    away: "SRB",
    position: 'game2',
    group: 'G',
  },
  {
    id: 30,
    stadium: "Education City",
    date: "2022/11/28 10:00:00.59",
    local: "KOR",
    away: "GHA",
    position: 'game2',
    group: 'H',
  },
  {
    id: 31,
    stadium: "Stadium 974",
    date: "2022/11/28 13:00:00.59",
    local: "BRA",
    away: "SUI",
    position: 'game2',
    group: 'G',
  },
  {
    id: 32,
    stadium: "Lusail Stadium",
    date: "2022/11/28 16:00:00.59",
    local: "POR",
    away: "URU",
    position: 'game2',
    group: 'H',
  },
  {
    id: 33,
    stadium: "Al Bayt",
    date: "2022/11/29 12:00:00.59",
    local: "NED",
    away: "QAT",
    position: 'game3',
    group: 'A',
  },
  {
    id: 34,
    stadium: "Khalifa International",
    date: "2022/11/29 12:00:00.59",
    local: "ECU",
    away: "SEN",
    position: 'game3',
    group: 'A',
  },
  {
    id: 35,
    stadium: "Ahmad Bin Ali",
    date: "2022/11/29 16:00:00.59",
    local: "WAL",
    away: "ENG",
    position: 'game3',
    group: 'B',
  },
  {
    id: 36,
    stadium: "Al Thumama",
    date: "2022/11/29 16:00:00.59",
    local: "IRN",
    away: "USA",
    position: 'game3',
    group: 'B',
  },
  {
    id: 37,
    stadium: "Al Janoub",
    date: "2022/11/30 12:00:00.59",
    local: "AUS",
    away: "DEN",
    position: 'game3',
    group: 'D',
  },
  {
    id: 38,
    stadium: "Education City",
    date: "2022/11/30 12:00:00.59",
    local: "TUN",
    away: "FRA",
    position: 'game3',
    group: 'D',
  },
  {
    id: 39,
    stadium: "Stadium 974",
    date: "2022/11/30 16:00:00.59",
    local: "POL",
    away: "ARG",
    position: 'game3',
    group: 'C',
  },
  {
    id: 40,
    stadium: "Lusail Stadium",
    date: "2022/11/30 16:00:00.59",
    local: "KSA",
    away: "MEX",
    position: 'game3',
    group: 'C',
  },
  {
    id: 41,
    stadium: "Ahmad Bin Ali",
    date: "2022/12/01 12:00:00.59",
    local: "CRO",
    away: "BEL",
    position: 'game3',
    group: 'F',
  },
  {
    id: 42,
    stadium: "Al Thumama",
    date: "2022/12/01 12:00:00.59",
    local: "CAN",
    away: "MAR",
    position: 'game3',
    group: 'F',
  },
  {
    id: 43,
    stadium: "Khalifa International",
    date: "2022/12/01 16:00:00.59",
    local: "JPN",
    away: "ESP",
    position: 'game3',
    group: 'E',
  },
  {
    id: 44,
    stadium: "Al Bayt",
    date: "2022/12/01 16:00:00.59",
    local: "CRC",
    away: "GER",
    position: 'game3',
    group: 'E',
  },
  {
    id: 45,
    stadium: "Al Janoub",
    date: "2022/12/02 12:00:00.59",
    local: "GHA",
    away: "URU",
    position: 'game3',
    group: 'H',
  },
  {
    id: 46,
    stadium: "Education City",
    date: "2022/12/02 12:00:00.59",
    local: "KOR",
    away: "POR",
    position: 'game3',
    group: 'H',
  },
  {
    id: 47,
    stadium: "Stadium 974",
    date: "2022/12/02 16:00:00.59",
    local: "SRB",
    away: "SUI",
    position: 'game3',
    group: 'G',
  },
  {
    id: 48,
    stadium: "Lusail Stadium",
    date: "2022/12/02 16:00:00.59",
    local: "CMR",
    away: "BRA",
    position: 'game3',
    group: 'G',
  },
    {
      id: 49,
      stadium: "Khalifa International",
      date: "2022/12/03 12:00:00.59",
      position: 'Octavos de Final',
      group: 'Octavos de Final',
    },
    {
      id: 50,
      stadium: "Ahmad Bin Ali",
      date: "2022/12/03 16:00:00.59",
      position: 'Octavos de Final',
      group: 'Octavos de Final',
    },
    {
      id: 51,
      stadium: "Al Thumama",
      date: "2022/12/04 12:00:00.59",
      position: 'Octavos de Final',
      group: 'Octavos de Final',
    },
    {
      id: 52,
      stadium: "Al Bayt",
      date: "2022/12/04 16:00:00.59",
      position: 'Octavos de Final',
      group: 'Octavos de Final',
    },
    {
      id: 53,
      stadium: "Al Janoub",
      date: "2022/12/05 12:00:00.59",
      position: 'Octavos de Final',
      group: 'Octavos de Final',
    },
    {
      id: 54,
      stadium: "Stadium 974",
      date: "2022/12/05 16:00:00.59",
      position: 'Octavos de Final',
      group: 'Octavos de Final',
    },
    {
      id: 55,
      stadium: "Education City",
      date: "2022/12/06 12:00:00.59",
      position: 'Octavos de Final',
      group: 'Octavos de Final',
    },
    {
      id: 56,
      stadium: "Lusail Stadium",
      date: "2022/12/06 16:00:00.59",
      position: 'Octavos de Final',
      group: 'Octavos de Final',
    },
    {
      id: 57,
      stadium: "Education City",
      date: "2022/12/09 12:00:00.59",
      position: 'Cuartos de Final',
      group: 'Cuartos de Final',
    },
    {
      id: 58,
      stadium: "Lusail Stadium",
      date: "2022/12/09 16:00:00.59",
      position: 'Cuartos de Final',
      group: 'Cuartos de Final',
    },
    {
      id: 59,
      stadium: "Al Thumama",
      date: "2022/12/10 12:00:00.59",
      position: 'Cuartos de Final',
      group: 'Cuartos de Final',
    },
    {
      id: 60,
      stadium: "Al Bayt",
      date: "2022/12/10 16:00:00.59",
      position: 'Cuartos de Final',
      group: 'Cuartos de Final',
    },
    {
      id: 61,
      stadium: "Lusail Stadium",
      date: "2022/12/13 16:00:00.59",
      position: 'Semifinales',
      group: 'Semifinales',
    },
    {
      id: 62,
      stadium: "Al Bayt",
      date: "2022/12/14 16:00:00.59",
      position: 'Semifinales',
      group: 'Semifinales',
    },
    {
      id: 63,
      stadium: "Khalifa International",
      date: "2022/12/17 12:00:00.59",
      position: 'Final y Tercer Puesto',
      group: 'Final y Tercer Puesto',
    },
    {
      id: 64,
      stadium: "Lusail Stadium",
      date: "2022/12/18 12:00:00.59",
      position: 'Final y Tercer Puesto',
      group: 'Final y Tercer Puesto',
    }
  ]);


  useEffect(() => {
    dispatch(getGroupGames(group, setLoading));
    dispatch(getGroupTeams(group, setLoading2));
    // return () => {
    //   dispatch(cleanGames());
    //   dispatch(cleanTeams());
    // }
  }, [dispatch, group, isModify]);

  useEffect(() => {
    setLoading(true);
  //   setLoading2(true);
    dispatch(getGroupGames(group, setLoading));
  //   dispatch(getGroupTeams(group, setLoading2));

  }, [group]);


  // if(loading) {
  //   return <Loading2 />
  // } 
  // if(loading2) {
  //   return <Loading2 />
  // } 
    return (
      <div className={style.all}>
        <div className={style.tabla}>
          <BasicTable group={group} teams2={teams2} isModify={isModify}/>
        </div>
        <div className={style.barra}>
                  <div>
                      <span className={style.date}>
                          Dia
                      </span>
                  </div>
                  <div className={style.hour}>
                      <span className={style.hour}>
                          Hora
                      </span>
                  </div>
                  <div className={width > 800 ? style.stadium : style.none}>
                      <span className={style.stadium}>
                          Estadio
                      </span>
                  </div>
                  <div className={style.flag}>
                  </div>
                  <div className={style.team}>
                      <span className={style.team1}>
                        Local
                      </span>
                  </div>
                  <div className={style.goals}>
                  </div>
                  <div className={style.goals}>
                  </div>
                  <div className={style.team}>
                      <span className={style.team2}>
                        Visitante
                      </span>
                  </div>
                  <div className={style.flag}>
                  </div>
              </div>
  
        <div className={style.games}>
          { (group === 'A' || group === 'B' || group === 'C' || group === 'D' || group === 'E' || group === 'F' || group === 'G' || group === 'H') &&
            games.map(game => {
              if(loading) {
                return(
                  <div className={style.load}>
                      <Loading2 />
                  </div>
                )
              } 
              return (
              <Partido  key={game.id} 
                        id={game.id} 
                        date={game.date.slice(0,10)} 
                        hour={game.date.slice(11,16)}
                        stadium={game.stadium}
                        img1={game.local ? game.local === game.teams[0].id ? game.teams[0].img : game.teams[1].img : null}
                        team1={game.local ? game.local === game.teams[0].id ? game.teams[0].name : game.teams[1].name : null}
                        img2={game.away ? game.away === game.teams[0].id ? game.teams[0].img : game.teams[1].img : null}
                        team2={game.away ? game.away === game.teams[0].id ? game.teams[0].name : game.teams[1].name : null}
                        id1={game.local ? game.local === game.teams[0].id ? game.teams[0].id : game.teams[1].id : null}
                        id2={game.away ? game.away === game.teams[0].id ? game.teams[0].id : game.teams[1].id : null}
                        localResult={games2[game.id-1].localResult !== null ? games2[game.id-1].localResult : null }
                        awayResult={games2[game.id-1].awayResult !== null ? games2[game.id-1].awayResult : null }
                        setIsModify={setIsModify}
                        isModify={isModify}
                        teams2={teams2}
                        group={group}
                        games2={games2} 
                        position={game.position} />
            )})
          }
           { (group === 'Octavos de Final' || group === 'Cuartos de Final' || group === 'Semifinales' || group === 'Final y Tercer Puesto') &&
              games2.filter(game=> game.group === group).map(game => {
              return (
              <Partido  key={game.id} 
                        id={game.id} 
                        date={game.date.slice(0,10)} 
                        hour={game.date.slice(11,16)}
                        stadium={game.stadium}
                        group={game.group}
                        penalties={game.penalties}
                        img1={game.local ? game.local.img : null}
                        img2={game.away ? game.away.img : null}
                        team1={game.local ? game.local.name : null}
                        team2={game.away ? game.away.name : null}
                        id1={game.local ? game.local.id : null}
                        id2={game.away ? game.away.id : null}
                        localResult={game.localResult !== null ? game.localResult : null}
                        awayResult={game.awayResult !== null ? game.awayResult : null}
                        setIsModify={setIsModify}
                        isModify={isModify}
                        teams2={teams2}
                        games2={games2} />
            )})
          }
        </div>
        <div className={style.buttons}>
          { group === 'A' &&
          <div>      
            <button className={style.hidden}>  </button>
            <button className={style.next} onClick={toNextGroup}> Ir al Grupo B </button>
          </div> }
          { group === 'B' &&
          <div>      
            <button className={style.prev} onClick={toPrevGroup}> Ir al Grupo A </button>
            <button className={style.next} onClick={toNextGroup}> Ir al Grupo C </button>
          </div> }       
          { group === 'C' &&
          <div>      
            <button className={style.prev} onClick={toPrevGroup}> Ir al Grupo B </button>
            <button className={style.next} onClick={toNextGroup}> Ir al Grupo D </button>
          </div> }      
          { group === 'D' &&
          <div>      
            <button className={style.prev} onClick={toPrevGroup}> Ir al Grupo C </button>
            <button className={style.next} onClick={toNextGroup}> Ir al Grupo E </button>
          </div> }   
          { group === 'E' &&
          <div>      
            <button className={style.prev} onClick={toPrevGroup}> Ir al Grupo D </button>
            <button className={style.next} onClick={toNextGroup}> Ir al Grupo F </button>
          </div> }     
          { group === 'F' &&
          <div>      
            <button className={style.prev} onClick={toPrevGroup}> Ir al Grupo E </button>
            <button className={style.next} onClick={toNextGroup}> Ir al Grupo G </button>
          </div> }    
          { group === 'G' &&
          <div>      
            <button className={style.prev} onClick={toPrevGroup}> Ir al Grupo F </button>
            <button className={style.next} onClick={toNextGroup}> Ir al Grupo H </button>
          </div> }   
          { group === 'H' &&
          <div>      
            <button className={style.prev} onClick={toPrevGroup}> Ir al Grupo G </button>
            <button className={style.next} onClick={toNextGroup}> Ir al Octavos de Final  </button>
          </div> }   
          { group === 'Octavos de Final' &&
          <div>      
            <button className={style.prev} onClick={toPrevGroup}> Ir al Grupo H </button>
            <button className={style.next} onClick={toNextGroup}> Ir a Cuartos de Final  </button>
          </div> }   
          { group === 'Cuartos de Final' &&
          <div>      
            <button className={style.prev} onClick={toPrevGroup}> Ir a Octavos de Final </button>
            <button className={style.next} onClick={toNextGroup}> Ir a Semifinales  </button>
          </div> }   
          { group === 'Semifinales' &&
          <div>      
            <button className={style.prev} onClick={toPrevGroup}> Ir a Cuartos de Final </button>
            <button className={style.next} onClick={toNextGroup}> Ir a Final y Tercer Puesto  </button>
          </div> }  
          { group === 'Final y Tercer Puesto' &&
          <div >      
            <button className={style.prev} onClick={toPrevGroup}> Ir a Semifinales </button>
            <button className={style.hidden}>  </button>
          </div> }  
      </div>
  
      </div>
      
    )

  }
  

export default Grupo

