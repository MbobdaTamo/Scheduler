<?php

session_id(2022);
session_start();

// if exist connected else not
if(isset($_SESSION['userDatas'])) {
	echo json_encode(true);
}
else {
	echo json_encode(false);
}
?>