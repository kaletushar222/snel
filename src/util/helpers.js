export function openNav() {
    console.log("openNav")
    document.getElementById("mySidenav").style.width = "250px";
}
  
export function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}
