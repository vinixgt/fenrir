<?php
/**
* Objeto que envia los datos del usuario y password
*/
class Objeto{
	private $User;
	private $Password;
	private $Token;

	public	function getUser(){
			return $this->User;

		}
	
	public	function getPassword(){
			return $this->Password;
		}
	
	public	function setUser($usuario){
			$this->User=$usuario;
			
			
		}

	public	function setPassword($pass){

			$this->Password=$pass;
		}
}
	
	$Usuario=new Objeto();
	
	
	$Usuario->setUser($_POST["User"]);
	$Usuario->setPassword($_POST["Password"]);

	if($Usuario != null){
		/*echo ($Usuario->getUser());
		echo ($Usuario->getPassword());*/
		echo json_encode($Usuario);
	}
	
	
	/*$User=$_POST["User"];
	$Password=$_POST["Password"];
	print($User) ;
	print($Password);	
	*/
?>