function decode_base64(input_target){
	input_target.val(atob(input_target.val()));
}

function encode_base64(input_target){
	input_target.val(btoa(input_target.val()));
}