const profile = {
    username: "Jacob",
    playTime: 300,
    
    changeUsername(newName) {
        this.username = newName; // Yeni kullanıcı adı
    },
    
    updatePlayTime(hours) {
        this.playTime += hours; //Oyunda geçen zaman artırılır
    },
    
    getInfo() {
        return `${this.username} has ${this.playTime} active hours!`; //Kullanıcının aktif oyun süresini verir
    }
};

console.log(profile.getInfo()); // "Jacob has 300 active hours!"

profile.changeUsername("Marco");
console.log(profile.getInfo()); // "Marco has 300 active hours!"

profile.updatePlayTime(20);
console.log(profile.getInfo()); // "Marco has 320 active hours!"
