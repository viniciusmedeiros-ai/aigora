---
title: "Lançamento do PostgreSQL 19"
date: 2026-11-19
categoria: "novas-ias"
fonte: "Simon Willison"
fonteUrl: "https://simonwillison.net/2026/Nov/19/postgresql-19/"
resumo: "PostgreSQL 19 lançado (via) Na maioria dos anos, o PostgreSQL lança uma nova versão em setembro, mas a versão deste ano veio dois meses depois, principalmente devido à enxurrada de problemas que a equipe do PostgreSQL precisou resolver como parte do apocalipse de vulnerabilidades relatadas por IA em andamento."
destaque: false
---

PostgreSQL 19 lançado (via) Na maioria dos anos, o PostgreSQL lança uma nova versão em setembro, mas a versão deste ano veio dois meses depois, principalmente devido à enxurrada de problemas que a equipe do PostgreSQL precisou resolver como parte do apocalipse de vulnerabilidades relatadas por IA em andamento.

Esta versão definitivamente valeu a espera. Meu novo recurso favorito é este:

Para aplicativos que enviam leituras para servidores em espera, o PostgreSQL 19 adiciona consistência "read-your-writes" com o novo comando WAIT FOR LSN. Uma sessão em um servidor em espera pode usar o WAIT FOR LSN para aguardar até que o servidor em espera tenha reproduzido o log de gravação antecipada (WAL) até um número de sequência de log (LSN) específico antes de executar uma consulta, para que o aplicativo possa ler os dados que acabou de gravar no servidor primário.

UPDATE movie SET genre = 'Dramatic' WHERE genre = 'Drama'; SELECT pg_current_wal_insert_lsn(); Isso retorna um valor como 0/0306EE20 . Armazene isso em algum lugar (um cookie assinado funcionaria) para que, em uma solicitação subsequente, seu aplicativo possa fazer o seguinte:

WAIT FOR LSN '0/0306EE20' WITH (TIMEOUT '0.1s'); SELECT * FROM movie WHERE genre = 'Drama'; O tempo limite é opcional. Se você fornecer um, receberá um erro caso a réplica com a qual está se comunicando não alcance o progresso dentro do tempo especificado.

Encontrei esse padrão pela primeira vez na Wikipédia, que tem uma versão desenvolvida manualmente dele, criada com base na replicação do MySQL:

Além disso, o MediaWiki tenta garantir que o usuário veja os eventos que ocorrem na wiki em ordem cronológica. Alguns segundos de atraso podem ser tolerados, desde que o usuário veja uma imagem consistente nas solicitações subsequentes. Isso é feito salvando a posição do binlog primário na sessão e, em seguida, no início de cada solicitação, aguardando que a réplica alcance essa posição antes fazer qualquer leitura a partir dele.

Aqui está o código relevante do MediaWiki, que hoje em dia usa a função WAIT_FOR_EXECUTED_GTID_SET() do MySQL e recorre à SOURCE_POS_WAIT().

---

**Fonte original:** [Simon Willison](https://simonwillison.net/2026/Nov/19/postgresql-19/)
