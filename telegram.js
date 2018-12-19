var users = [];
async function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function getUserInfo(item) {
  let info = [];
  $(item).click();
  $('.md_modal_section_param_value').each(async function(i, user){
    user.innerText
    if(user.innerText){
      await info.push(user.innerText);
    }
  });
  await sleep(500);
  ($('.md_modal_action_close')[1]) && $('.md_modal_action_close')[1].click();
  await sleep(500);
  return info;

}
async  function showUsersInfor() {
  let usersDialog = $('.md_modal_list_peer_name a');
  for (let i =0; i < usersDialog.length; i++){
    let item = usersDialog[i];
    let user = await getUserInfo(item);
    users.push(user);
    await sleep(500);
  }
  localStorage.setItem('users', users);
  await sleep(100);
  $('.md_modal_action_close').click();
}

async function showGroup() {
  $('.tg_head_btn').click();
  await sleep(200);
  showUsersInfor();

}

function telegram(groupName) {
  $('.im_dialog_peer span').each(async function(i, item) {
    let name = $(item)[0].innerText;
    if(groupName === name) {
      console.log('Okie go...')
      $(item).mousedown();
      await sleep(200);
      await showGroup()
    }
  });
}

telegram('test');
