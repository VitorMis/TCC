<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $produto = $_POST["produto"];
    $nome = $_POST["nome"]; // Obtenha os outros campos do formulário conforme necessário

    // Configurar os detalhes do e-mail
    $to = "vmistura3@outlook.com";
    $subject = "Novo Pedido - $produto";
    $message = "Produto: $produto\n";
    $message .= "Nome: $nome\n"; // Adicione os outros campos do formulário conforme necessário

    // Enviar o e-mail
    mail($to, $subject, $message);

    // Redirecionar o usuário após o envio
    header("Location: index.html");
}
?>
