const args = process.argv.slice(2)
//ensure argument is given
if (args.length === 0) {
  console.log('No alarms given')
} else {

  args.forEach(ele => {
    setTimeout(function() {
      //edge cases, negatives, Nan, blanks
      if (ele < 0 || isNaN(ele)===true || ele === "") {
        ele = 0;
      } else {
        //otherwise execute alarm at given time
        console.log(`This alarm goes of at ${ele} seconds`);
        process.stdout.write('\x07');
      }
    }, ele*1000)
  });

}
