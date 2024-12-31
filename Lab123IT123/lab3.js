const os = require('os');
const path = require('path');
const fs = require('fs');

function getosinfo(){
    return{
    Ostype: os.type(),
    TotalMemory: os.totalmem(),
    FreeMemory: os.freemem(),
    cpuDetails: os.cpus().map((cpu, index) => ({
        core: index + 1,
        model: cpu.model,
        speed: `${cpu.speed} MHz`,
      })),
   };
}
console.log("System Information : ",getosinfo());

function saveinfo(info){
const logspath  = path.join(__dirname,'logs');
const filepath = path.join(logspath,'systeminfo.txt');

if(!fs.existsSync(logspath)){
    fs.mkdirSync(logspath);
};

const Info = [
    `Os type = ${info.Ostype}`,
    `Os memory = ${info.TotalMemory}`,
    `Os freememory = ${info.FreeMemory}`,
    'CPU Details:',
    info.cpuDetails
      .map(cpu => `  Core ${cpu.core}: ${cpu.model} (${cpu.speed})`)
      .join('\n'),].join('\n');

fs.writeFileSync(filepath,Info,'utf8');
}

saveinfo(getosinfo());