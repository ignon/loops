PlayFab.settings.titleId = '2688F';
var pfCustomId = getGuid();
var pfLoggedIn = false;
var pfSaveSlotList = [];
var pfSaveSlotListLoaded = false;
var pfPlayFabId = "";
pfLogin();


function pfLogin(){
	PlayFabClientSDK.LoginWithCustomID(
		{
			TitleId: PlayFab.settings.titleId,
			CustomId: pfCustomId,
			CreateAccount: true
		},
		function loginComplete(result, error) {
			if (result !== null) {
				console.log('Logged in');
				pfLoggedIn = true;
				pfPlayFabId = result.data.PlayFabId;
				//pfGetCharacters();
				pfCreateSaveSlot(slotName);
			} else if (error !== null) {
				console.log( PlayFab.GenerateErrorReport(error) );
			}
		}
	);
}


function pfUpdateLatestMission(missionIndex) {
	let characterId = saveslot.get('CharacterId');

	PlayFabClientSDK.UpdateCharacterStatistics(
		{
			CharacterId: characterId,
			CharacterStatistics: {
				missionLatestUnlocked: missionLatestUnlocked
			}
		},
		function() {
			console.log('missionLatestUnlocked updated');
		}
	);
	
	let globalBest = localStorage.getItem('missionLatestUnlocked');
	if (typeof globalBest !== 'number' || globalBest >= missionIndex) return;
	
	localStorage.setItem('missionLatestUnlocked', missionIndex);
	PlayFabClientSDK.UpdatePlayerStatistics(
		{
			"Statistics": [
				{
				  "StatisticName": "LatestUnlocked",
				  "Value": missionIndex
				}
			 ]
		},
		function(result, error) {
			if (result !== null) console.log('global scores updated');
		}
	);
}

/*function pfGetCharacters() {
	PlayFabClientSDK.GetAllUsersCharacters(
		{
			PlayFabId: pfPlayFabId
		},
		function(result, error) {
			if (result !== null) {
				console.log(result.data);
				pfSaveSlotList = result.data.Characters;
				
				
				
			}
		}
	);
};
function pfGetSaveSlotId(name) {
	let slot = null;
	
	slot = pfSaveSlotList.find(function(cha, i) {
		if (cha.CharacterName == name) {
			return cha;
		}
	});
	return slot.CharacterId;
}*/
function pfCreateSaveSlot(slotName) {
	if (saveslot.get('CharacterId')) return;
	
	PlayFabClientSDK.GrantCharacterToUser(
		{
			ItemId: 'SaveSlot',
			CharacterName: slotName
		},
		function(result, error) {
			if (result !== null) {
				saveslot.set('CharacterId', result.data.CharacterId);
				console.log(result);
			}
			if (error !== null) console.log(error);
		}
	);
}


function getGuid() {
	let guid = localStorage.getItem('ignoGUID');
	if (guid) return guid;
	
	guid = (S4() + S4() + "-" + S4() + "-4" + S4().substr(0,3) + "-" + S4() + "-" + S4() + S4() + S4()).toLowerCase();
	localStorage.setItem('ignoGUID', guid);
	return guid;
}

function S4() {
    return (((1+Math.random())*0x10000)|0).toString(16).substring(1); 
}
