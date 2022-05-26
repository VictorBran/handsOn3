CREATE TABLE `paciente` (
  `id_paciente` int NOT NULL AUTO_INCREMENT,
  `nome` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `data_nascimento` date NOT NULL,
  PRIMARY KEY (`id_paciente`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8mb3

CREATE TABLE `psicologo` (
  `id_psicologo` int NOT NULL AUTO_INCREMENT,
  `nome` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `senha` varchar(100) NOT NULL,
  `apresentacao` text NOT NULL,
  PRIMARY KEY (`id_psicologo`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8mb3

CREATE TABLE `atendimento` (
  `id_atendimento` int NOT NULL AUTO_INCREMENT,
  `data_atendimento` datetime NOT NULL,
  `descricao` text NOT NULL,
  `psicologo_id` int NOT NULL,
  `paciente_id` int NOT NULL,
  PRIMARY KEY (`id_atendimento`),
  KEY `fk_atendimento_psicologo1_idx` (`psicologo_id`),
  KEY `fk_atendimento_paciente1_idx` (`paciente_id`),
  CONSTRAINT `fk_atendimento_paciente1` FOREIGN KEY (`paciente_id`) REFERENCES `paciente` (`id_paciente`),
  CONSTRAINT `fk_atendimento_psicologo1` FOREIGN KEY (`psicologo_id`) REFERENCES `psicologo` (`id_psicologo`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8mb3