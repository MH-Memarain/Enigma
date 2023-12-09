var alphbet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var router1 = ["E", "K", "M", "F", "L", "G", "D", "Q", "V", "Z", "N", "T", "O", "W", "Y", "H", "X", "U", "S", "P", "A", "I", "B", "R", "C", "J"];
var router2 = ["A", "J", "D", "K", "S", "I", "R", "U", "X", "B", "L", "H", "W", "T", "M", "C", "Q", "G", "Z", "N", "P", "Y", "F", "V", "O", "E"];
var router3 = ["B", "D", "F", "H", "J", "L", "C", "P", "R", "T", "X", "V", "Z", "N", "Y", "E", "I", "W", "G", "A", "K", "M", "U", "S", "Q", "O"];z
let A = document.getElementById("a_light_button");
let B = document.getElementById("b_light_button");
let C = document.getElementById("c_light_button");
let D = document.getElementById("d_light_button");
let E = document.getElementById("e_light_button");
let F = document.getElementById("f_light_button");
let G = document.getElementById("g_light_button");
let H = document.getElementById("h_light_button");
let I = document.getElementById("i_light_button");
let J = document.getElementById("j_light_button");
let K = document.getElementById("k_light_button");
let L = document.getElementById("l_light_button");
let M = document.getElementById("m_light_button");
let N = document.getElementById("n_light_button");
let O = document.getElementById("o_light_button");
let P = document.getElementById("p_light_button");
let Q = document.getElementById("q_light_button");
let R = document.getElementById("r_light_button");
let S = document.getElementById("s_light_button");
let T = document.getElementById("t_light_button");
let U = document.getElementById("u_light_button");
let V = document.getElementById("v_light_button");
let W = document.getElementById("w_light_button");
let X = document.getElementById("x_light_button");
let Y = document.getElementById("y_light_button");
let Z = document.getElementById("z_light_button");
let RouterNumber1 = 0;
let RouterNumber2 = 0;
let RouterNumber3 = 0;
let RouterShow1 = document.getElementById("router_1")
let RouterShow2 = document.getElementById("router_2")
let RouterShow3 = document.getElementById("router_3")
function TurnUp(router) {
    let item = router.pop();
    router.unshift(item);
}
function TurnDown(router) {
    let item = router.shift();
    router.push(item);
}
function RotateRotour() {
    if (RouterNumber1 == 26) {
        RouterNumber1 = 0;
        router1 = ["E", "K", "M", "F", "L", "G", "D", "Q", "V", "Z", "N", "T", "O", "W", "Y", "H", "X", "U", "S", "P", "A", "I", "B", "R", "C", "J"];
        if (RouterNumber2 == 26) {
            RouterNumber2 = 0;
            router2 = ["A", "J", "D", "K", "S", "I", "R", "U", "X", "B", "L", "H", "W", "T", "M", "C", "Q", "G", "Z", "N", "P", "Y", "F", "V", "O", "E"];
            if (RouterNumber3 == 26) {
                RouterNumber3 = 0;
                router3 = ["B", "D", "F", "H", "J", "L", "C", "P", "R", "T", "X", "V", "Z", "N", "Y", "E", "I", "W", "G", "A", "K", "M", "U", "S", "Q", "O"];
            }
            else {
                RouterNumber3 += 1;
                TurnUp(router3)
            }
        }
        else
            RouterNumber2 += 1
        TurnUp(router2)
    }
    else {
        RouterNumber1 += 1
        TurnUp(router1)
    }
    RouterShow1.innerHTML = RouterNumber1;
    RouterShow2.innerHTML = RouterNumber2;
    RouterShow3.innerHTML = RouterNumber3;
}
function GearOneRouterUp() {
    if (RouterNumber1 != 26) {
        TurnUp(router1);
        RouterNumber1 += 1;
        RouterShow1.innerHTML = RouterNumber1
        document.getElementsByClassName("router_disign_simulator_enigma_machin")[0].style.backgroundImage = "linear-gradient(to top , black,white,#171717d1,white,#171717d1 ,white,#171717d1 , white , black)"
        setTimeout(GearDisignOneTourning,1000)
    }
}
function GearOneRouterDown() {
    if (RouterNumber1 != 0) {
        TurnDown(router1);
        RouterNumber1 -= 1
        RouterShow1.innerHTML = RouterNumber1
        document.getElementsByClassName("router_disign_simulator_enigma_machin")[0].style.backgroundImage = "linear-gradient(to top , black,white,#171717d1,white,#171717d1 ,white,#171717d1 , white , black)"
        setTimeout(GearDisignOneTourning,1000)
    }
}
function GearTwoRouterUp() {
    if (RouterNumber2 != 26) {
        TurnUp(router2);
        RouterNumber2 += 1
        RouterShow2.innerHTML = RouterNumber2
        document.getElementsByClassName("router_disign_simulator_enigma_machin")[1].style.backgroundImage = "linear-gradient(to top , black,white,#171717d1,white,#171717d1 ,white,#171717d1 , white , black)"
        setTimeout(GearDisignTwoTourning,1000)
    }
}
function GearTwoRouterDown() {
    if (RouterNumber2 != 0) {
        TurnDown(router2);
        RouterNumber2 -= 1
        RouterShow2.innerHTML = RouterNumber2
        document.getElementsByClassName("router_disign_simulator_enigma_machin")[1].style.backgroundImage = "linear-gradient(to top , black,white,#171717d1,white,#171717d1 ,white,#171717d1 , white , black)"
        setTimeout(GearDisignTwoTourning,1000)
    }
}
function GearThreeRouterUp() {
    if (RouterNumber3 != 26) {
        TurnUp(router3);
        RouterNumber3 += 1;
        RouterShow3.innerHTML = RouterNumber3;
        document.getElementsByClassName("router_disign_simulator_enigma_machin")[2].style.backgroundImage = "linear-gradient(to top , black,white,#171717d1,white,#171717d1 ,white,#171717d1 , white , black)"
        setTimeout(GearDisignThreeTourning,1000)
    }
}
function GearThreeRouterDown() {    
    if (RouterNumber3 != 0) {
        TurnDown(router3);
        RouterNumber3 -= 1;
        RouterShow3.innerHTML = RouterNumber3;                     
        document.getElementsByClassName("router_disign_simulator_enigma_machin")[2].style.backgroundImage = "linear-gradient(to top , black,white,#171717d1,white,#171717d1 ,white,#171717d1 , white , black)"
        setTimeout(GearDisignThreeTourning,1000)
    }
}
function GearDisignOneTourning(){
    document.getElementsByClassName("router_disign_simulator_enigma_machin")[0].style.backgroundImage = "linear-gradient(to top , black,white,#171717d1,white,#171717d1 , white, #171717d1, white , #171717d1, white , black)"
}
function GearDisignTwoTourning(){
    document.getElementsByClassName("router_disign_simulator_enigma_machin")[1].style.backgroundImage = "linear-gradient(to top , black,white,#171717d1,white,#171717d1 , white, #171717d1, white , #171717d1, white , black)"
}
function GearDisignThreeTourning(){
    document.getElementsByClassName("router_disign_simulator_enigma_machin")[2].style.backgroundImage = "linear-gradient(to top , black,white,#171717d1,white,#171717d1 , white, #171717d1, white , #171717d1, white , black)"
}
function Reflector(character) {
    return alphbet[alphbet.length - alphbet.findIndex(Element => Element == character) - 1];
}
// clicking 
function W_click() {
    let Key = document.getElementById("w_click_button").innerHTML;
    FindChar(Key)
}
function E_click() {
    let Key = document.getElementById("e_click_button").innerHTML;
    FindChar(Key);
}
function Q_click() {
    let Key = document.getElementById("q_click_button").innerHTML;
    FindChar(Key);
}
function R_click() {
    let Key = document.getElementById("r_click_button").innerHTML;
    FindChar(Key);
}
function T_click() {
    let Key = document.getElementById("t_click_button").innerHTML;
    FindChar(Key);
}
function Z_click() {
    let Key = document.getElementById("z_click_button").innerHTML;
    FindChar(Key);
}
function U_click() {
    let Key = document.getElementById("u_click_button").innerHTML;
    FindChar(Key);
}
function I_click() {
    let Key = document.getElementById("i_click_button").innerHTML;
    FindChar(Key);
}
function O_click() {
    let Key = document.getElementById("o_click_button").innerHTML;
    FindChar(Key);
}
function A_click() {
    let Key = document.getElementById("a_click_button").innerHTML;
    FindChar(Key);
}
function S_click() {
    let Key = document.getElementById("s_click_button").innerHTML;
    FindChar(Key);
}
function D_click() {
    let Key = document.getElementById("d_click_button").innerHTML;
    FindChar(Key);
}
function F_click() {
    let Key = document.getElementById("f_click_button").innerHTML;
    FindChar(Key);
}
function G_click() {
    let Key = document.getElementById("g_click_button").innerHTML;
    FindChar(Key);
}
function H_click() {
    let Key = document.getElementById("h_click_button").innerHTML;
    FindChar(Key);
}
function J_click() {
    let Key = document.getElementById("j_click_button").innerHTML;
    FindChar(Key);
}
function K_click() {
    let Key = document.getElementById("k_click_button").innerHTML;
    FindChar(Key);
}
function P_click() {
    let Key = document.getElementById("p_click_button").innerHTML;
    FindChar(Key);
}
function Y_click() {
    let Key = document.getElementById("y_click_button").innerHTML;
    FindChar(Key);
}
function X_click() {
    let Key = document.getElementById("x_click_button").innerHTML;
    FindChar(Key);
}
function C_click() {
    let Key = document.getElementById("c_click_button").innerHTML;
    FindChar(Key);
}
function V_click() {
    let Key = document.getElementById("v_click_button").innerHTML;
    FindChar(Key);
}
function B_click() {
    let Key = document.getElementById("b_click_button").innerHTML;
    FindChar(Key);
}
function N_click() {
    let Key = document.getElementById("n_click_button").innerHTML;
    FindChar(Key);
}
function M_click() {
    let Key = document.getElementById("m_click_button").innerHTML;
    FindChar(Key);
}
function L_click() {
    let Key = document.getElementById("l_click_button").innerHTML;
    FindChar(Key);
}
function FindChar(Key) {
    let c1 = router1[alphbet.findIndex(Element => Element == Key)]
    let c2 = router2[alphbet.findIndex(Element => Element == c1)];
    let c3 = router3[alphbet.findIndex(Element => Element == c2)];
    let reflected = Reflector(c3);
    c3 = alphbet[router3.findIndex(Element => Element == reflected)];
    c2 = alphbet[router2.findIndex(Element => Element == c3)];
    c1 = alphbet[router1.findIndex(Element => Element == c2)];
    RotateRotour();
    LigthButton(c1)
}
function LigthButton(character) {
    switch (character) {
        case "A":
            A.style.backgroundImage = "radial-gradient(#484848 , #6c6c6c, #a8a8a8 , black)";
            A.style.color = "gold";
            break;
        case "B":
            B.style.backgroundImage = "radial-gradient(#484848 , #6c6c6c, #a8a8a8 , black)";
            B.style.color = "gold";
            break;
        case "C":
            C.style.backgroundImage = "radial-gradient(#484848 , #6c6c6c, #a8a8a8 , black)";
            C.style.color = "gold";
            break;
        case "D":
            D.style.backgroundImage = "radial-gradient(#484848 , #6c6c6c, #a8a8a8 , black)";
            D.style.color = "gold";
            break;
        case "E":
            E.style.backgroundImage = "radial-gradient(#484848 , #6c6c6c, #a8a8a8 , black)";
            E.style.color = "gold";
            break;
        case "F":
            F.style.backgroundImage = "radial-gradient(#484848 , #6c6c6c, #a8a8a8 , black)";
            F.style.color = "gold";
            break;
        case "G":
            G.style.backgroundImage = "radial-gradient(#484848 , #6c6c6c, #a8a8a8 , black)";
            G.style.color = "gold";
            break;
        case "H":
            H.style.backgroundImage = "radial-gradient(#484848 , #6c6c6c, #a8a8a8 , black)";
            H.style.color = "gold";
            break;
        case "I":
            I.style.backgroundImage = "radial-gradient(#484848 , #6c6c6c, #a8a8a8 , black)";
            I.style.color = "gold";
            break;
        case "J":
            J.style.backgroundImage = "radial-gradient(#484848 , #6c6c6c, #a8a8a8 , black)";
            J.style.color = "gold";
            break;
        case "K":
            K.style.backgroundImage = "radial-gradient(#484848 , #6c6c6c, #a8a8a8 , black)";
            K.style.color = "gold";
            break;
        case "L":
            L.style.backgroundImage = "radial-gradient(#484848 , #6c6c6c, #a8a8a8 , black)";
            L.style.color = "gold";
            break;
        case "M":
            M.style.backgroundImage = "radial-gradient(#484848 , #6c6c6c, #a8a8a8 , black)";
            M.style.color = "gold";
            break;
        case "N":
            N.style.backgroundImage = "radial-gradient(#484848 , #6c6c6c, #a8a8a8 , black)";
            N.style.color = "gold";
            break;
        case "O":
            O.style.backgroundImage = "radial-gradient(#484848 , #6c6c6c, #a8a8a8 , black)";
            O.style.color = "gold";
            break;
        case "P":
            P.style.backgroundImage = "radial-gradient(#484848 , #6c6c6c, #a8a8a8 , black)";
            P.style.color = "gold";
            break;
        case "Q":
            Q.style.backgroundImage = "radial-gradient(#484848 , #6c6c6c, #a8a8a8 , black)";
            Q.style.color = "gold";
            break;
        case "R":
            R.style.backgroundImage = "radial-gradient(#484848 , #6c6c6c, #a8a8a8 , black)";
            R.style.color = "gold";
            break;
        case "S":
            S.style.backgroundImage = "radial-gradient(#484848 , #6c6c6c, #a8a8a8 , black)";
            S.style.color = "gold";
            break;
        case "T":
            T.style.backgroundImage = "radial-gradient(#484848 , #6c6c6c, #a8a8a8 , black)";
            T.style.color = "gold";
            break;
        case "U":
            U.style.backgroundImage = "radial-gradient(#484848 , #6c6c6c, #a8a8a8 , black)";
            U.style.color = "gold";
            break;
        case "V":
            V.style.backgroundImage = "radial-gradient(#484848 , #6c6c6c, #a8a8a8 , black)";
            V.style.color = "gold";
            break;
        case "W":
            W.style.backgroundImage = "radial-gradient(#484848 , #6c6c6c, #a8a8a8 , black)";
            W.style.color = "gold";
            break;
        case "X":
            X.style.backgroundImage = "radial-gradient(#484848 , #6c6c6c, #a8a8a8 , black)";
            X.style.color = "gold";
            break;
        case "Y":
            Y.style.backgroundImage = "radial-gradient(#484848 , #6c6c6c, #a8a8a8 , black)";
            Y.style.color = "gold";
            break;
        case "Z":
            Z.style.backgroundImage = "radial-gradient(#484848 , #6c6c6c, #a8a8a8 , black)";
            Z.style.color = "gold";
            break;
    }
    setTimeout(DefaultLightButton, 2000)
}
function DefaultLightButton() {
    A.style.backgroundImage = "radial-gradient(#4f4f4f , #4f4f4f, #3e3e3e , black)";
    A.style.color = "#00000066";
    B.style.backgroundImage = "radial-gradient(#4f4f4f , #4f4f4f, #3e3e3e , black)";
    B.style.color = "#00000066";
    C.style.backgroundImage = "radial-gradient(#4f4f4f , #4f4f4f, #3e3e3e , black)";
    C.style.color = "#00000066";
    D.style.backgroundImage = "radial-gradient(#4f4f4f , #4f4f4f, #3e3e3e , black)";
    D.style.color = "#00000066";
    E.style.backgroundImage = "radial-gradient(#4f4f4f , #4f4f4f, #3e3e3e , black)";
    E.style.color = "#00000066";
    F.style.backgroundImage = "radial-gradient(#4f4f4f , #4f4f4f, #3e3e3e , black)";
    F.style.color = "#00000066";
    G.style.backgroundImage = "radial-gradient(#4f4f4f , #4f4f4f, #3e3e3e , black)";
    G.style.color = "#00000066";
    H.style.backgroundImage = "radial-gradient(#4f4f4f , #4f4f4f, #3e3e3e , black)";
    H.style.color = "#00000066";
    I.style.backgroundImage = "radial-gradient(#4f4f4f , #4f4f4f, #3e3e3e , black)";
    I.style.color = "#00000066";
    J.style.backgroundImage = "radial-gradient(#4f4f4f , #4f4f4f, #3e3e3e , black)";
    J.style.color = "#00000066";
    K.style.backgroundImage = "radial-gradient(#4f4f4f , #4f4f4f, #3e3e3e , black)";
    K.style.color = "#00000066";
    L.style.backgroundImage = "radial-gradient(#4f4f4f , #4f4f4f, #3e3e3e , black)";
    L.style.color = "#00000066";
    M.style.backgroundImage = "radial-gradient(#4f4f4f , #4f4f4f, #3e3e3e , black)";
    M.style.color = "#00000066";
    N.style.backgroundImage = "radial-gradient(#4f4f4f , #4f4f4f, #3e3e3e , black)";
    N.style.color = "#00000066";
    O.style.backgroundImage = "radial-gradient(#4f4f4f , #4f4f4f, #3e3e3e , black)";
    O.style.color = "#00000066";
    P.style.backgroundImage = "radial-gradient(#4f4f4f , #4f4f4f, #3e3e3e , black)";
    P.style.color = "#00000066";
    Q.style.backgroundImage = "radial-gradient(#4f4f4f , #4f4f4f, #3e3e3e , black)";
    Q.style.color = "#00000066";
    R.style.backgroundImage = "radial-gradient(#4f4f4f , #4f4f4f, #3e3e3e , black)";
    R.style.color = "#00000066";
    S.style.backgroundImage = "radial-gradient(#4f4f4f , #4f4f4f, #3e3e3e , black)";
    S.style.color = "#00000066";
    T.style.backgroundImage = "radial-gradient(#4f4f4f , #4f4f4f, #3e3e3e , black)";
    T.style.color = "#00000066";
    U.style.backgroundImage = "radial-gradient(#4f4f4f , #4f4f4f, #3e3e3e , black)";
    U.style.color = "#00000066";
    V.style.backgroundImage = "radial-gradient(#4f4f4f , #4f4f4f, #3e3e3e , black)";
    V.style.color = "#00000066";
    W.style.backgroundImage = "radial-gradient(#4f4f4f , #4f4f4f, #3e3e3e , black)";
    W.style.color = "#00000066";
    X.style.backgroundImage = "radial-gradient(#4f4f4f , #4f4f4f, #3e3e3e , black)";
    X.style.color = "#00000066";
    Y.style.backgroundImage = "radial-gradient(#4f4f4f , #4f4f4f, #3e3e3e , black)";
    Y.style.color = "#00000066";
    Z.style.backgroundImage = "radial-gradient(#4f4f4f , #4f4f4f, #3e3e3e , black)";
    Z.style.color = "#00000066";
}
function DocumentChanged(){
    
}