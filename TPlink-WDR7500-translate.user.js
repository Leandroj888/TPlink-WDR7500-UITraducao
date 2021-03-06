// ==UserScript==
// @name          TPlink WDR7500 WEB-UI Portugês Brasil
// @description   Author: Zollner Robert - Leandro Jorge Junges
// @version       0.1
// @require       http://ajax.googleapis.com/ajax/libs/jquery/1.8.2/jquery.min.js
// @include       http://192.168.1.1/*
// @include       http://192.168.3.1/*
// @include       http://192.168.50.133/*
// @include       http://192.168.55.5/*
// @grant         none
"permitir colagem"
// ==/UserScript==

var dict_ch2eng = {
	"运行状态":"Status de Operação",
	"设置向导":"Assistente de Configuração",
	"网络参数":"Parâmetros de Rede",
		"WAN口设置":"Configurações da WAN",
		"LAN口设置":"Configurações da LAN",
		"WAN口速率/模式":"Velocidade Porta WAN",
		"MAC地址克隆":"Clonar Endereço MAC",
	"无线频段设置":"Definição de Wireless",
	"无线设置 2.4GHz":"2.4GHz Wireless configurações",
		"基本设置":"Definições básicas",
		"QSS安全设置":"Configurações de segurança QSS",
		"QSS安全设置":"Configurações de segurança 2 QSS",
		"无线安全设置":"Configurações de segurança Wireless",
		"无线MAC地址过滤":"Filtragem de endereços MAC Wireless",
		"无线高级设置":"Wireless Configurações avançadas",
		"主机状态":"Status do Host",
	"无线设置 5GHz":"5.0GHz Wireless configurações",
		// same as above
	"DHCP服务器":"Serviço de DHCP",
		"DHCP服务":"Serviço de DHCP",
		"客户端列表":"Lista de Cliente",
		"静态地址分配":"Atribuição de endereço Estático",
	"网络共享":"Compartilhamento na Rede",
		"网络共享管理":"Compartilhamento de Rede",
		"FTP服务器":"Serviço FTP",
		"媒体服务器":"Servidor de Mídia",
		"打印服务器":"Servidor de Impressão",
		"共享帐户":"Contas Compartilhamento",
	"NAT设置":"Configurações NAT",
	"转发规则":"Regras Encaminhando",
		"虚拟服务器":"Servidor Virtual",
		"特殊应用程序":"Aplicações Especiais",
		"DMZ主机":"DMZ Host",
		"UPnP设置":"Configurações do UPnP",
	"安全功能":"Recursos de segurança",
		"安全设置":"Configurações de segurança",
		"局域网WEB管理":"Gestão LAN WEB",
		"远端WEB管理":"Gerenciamento remoto WEB",
	"家长控制":"Controle dos Pais",
	"上网控制":"Controle de acesso à Internet",
		"规则管理":"Regras de Gestão",
		"主机列表":"Lista de Host",
		"访问目标":"Acesso ao Alvo",
		"日程计划":"Horário",
	"路由功能":"Funções de Roteamento",
		"静态路由表":"Estátistica de Roteamento",
		"系统路由表":"Tabela de Roteamento do Sistema",
	"IP带宽控制":"Controle de banda IP",
		"控制设置":"Configurações de Controle",
		"控制规则":"As regras do Controle",
	"IP与MAC绑定":"IP e MAC obrigatório",
		"静态ARP绑定设置":"Definições de ligação estáticas ARP",
		"ARP映射表":"Tabela ARP",
	"动态DNS":"DNS Dinâmico",
	"系统工具":"Ferramentas do Sistema",
		"时间设置":"Hora do Sistema",
		"诊断工具":"Ferramentas de Diagnóstico",
		"软件升级":"Atualização de Software",
		"恢复出厂设置":"Restaurar Configurações de Fábrica",
		"备份和载入配置":"Backup Configurações",
		"重启路由器":"Reiniciar Roteador",
		"修改登录口令":"Alterar a Senha",
		"系统日志":"Log do Sistema",
		"流量统计":"Estatísticas de Tráfego",
	"更多TP-LINK产品，请点击查看 >>":"Mais produtos TP-LINK Clique para ver",
	
};

var dict_ch2eng_btn = {
	"保 存":"Salvar",
	"保存":"Salvar",
	"帮 助":"Ajuda",
	"帮助":"Ajuda",
	"返回":"Retornar",
	"返 回":"Retornar",
	"上一页": "Anterior",
	"上一步": "Retornar",
	"下一页":"Próximo",
	"下一步":"Próximo",
	"添加新条目": "Adicionar Novo",
	"增加单个条目": "Adicionar Um",
	"使所有条目生效": "Habilitar Todos",
	"使所有条目失效": "Desabilitar Todos",
	"删除所有条目": "Deletar Todos",
	"刷 新": "Atualizar",
	"释 放": "IP de Lançamento",
	"更 新": "Renovar IP",
	"新增使用者": "Adicionar Usuário",
	"自动检测":"Descobrir",
	"恢复出厂MAC":"Restaurar MAC de Fábrica",
	"克隆MAC地址":"Clonar Endereço de MAC",
	"关闭QSS":"Desabilitar Qss",
	"恢复初始PIN码":"Restaurar PIN inicial",
	"产生新的PIN码":"Gerar novo PIN",
	"添加设备":"Adicionar Dispositivo",
	"查找指定条目":"Procurar",
	"登 录":"Conectar",
	"退 出":"Desconectar",
	"启用":"Habilitar",
	"停用":"Desabilitar",
	"弹出设备":"Remover com Segurança",
	"重新扫描":"Procurar",
	"添加新文件夹":"Adicionar Nova Pasta",
	"全部扫描":"Verificação completa",
	"新增文件夹":"Nova Pasta",
	"名称":"Nome",
	"连 接":"Conectar",
	"断 线":"Desconectar",
	"未连接":"Não Conectado",
	"高级设置":"Configurações Avançadas",
	"返 回" : "Retornar",
	"重 启":"Reiniciar",
	"完 成":"Fim",
	"启用过滤":"Ativando Filtering",
	"所有条目生效":"Todas Entradas se tornam válidas",
	"所有条目失效":"Todas Entradas se tornam inválidas",
	"描 述":"Descrição",
	"状态":"Status",
	"重启路由器":"Reiniciar",
	"确 定":"Confirmar",
	"设为家长PC":"Inserir MAC do PC Atual",
	"移 动":"Mudança",
	"导入":"Importar",
	"删除":"Excluir",
	"全部绑定":"Todos Binding",
	"全部导入":"Importar tudo",
	"获取GMT时间":"Obter GMT Tempo",
	"开 始":"Iniciar",
	"恢复出厂设置":"Restaurar",
	"备份配置文件":"Arquivo de Backup",
	"载入配置文件":"Perfil de Carregar",
	"清 空":"Limpar",
	"保存所有日志":"Guardar",
	"通过邮件发送":"Enviar Log Via E-mail",
	"清除所有日志":"Zerar",
	"邮件发送设置":"Enviar Config Via E-mail",
	"开启流量统计":"Estatísticas de tráfego Abertas",
	"上一级":"Num",
	
};

var dict_ch2eng_title = {
	"版本信息":"Informações da Versão",
	"WAN口状态":"WAN Status",
	"LAN口状态":"LAN Status",
	"无线状态 2.4GHz":"2.4GHz Wireless Status",
	"无线状态 5GHz":"5GHz Wireless Status",
	"WAN口流量统计":"WAN Estatísticas de Tráfego",
    "无线网络基本设置 (2.4GHz)":"Wireless Configurações Básica de Rede (2.4GHz)",
	"无线网络安全设置":"Wireless Configurações de Segurança da Rede",
	"无线网络MAC地址过滤设置":"Wi-Fi MAC Configurações de Filtragem de Endereço",
	"无线网络主机状态":"Wireless Host Status da Rede",
	"无线网络基本设置 （5GHz）":"Wireless Configurações Básica de Rede (5GHz)",
	"文件系统":"Sistema de Arquivos",
	"文件夹":"Pasta",
	"删除":"Excluir",
	"使用者账户":"Conta de Usuários",
	"密码":"Senha",
	"网络共享存取权限":"Direitos de acesso de compartilhamento de rede",
	"FTP访问权限":"FTP Acesso",
	"修改":"Editar",
	"客户端名":"Nome do Cliente",
	"MAC 地址":"MAC Endereço",
	"IP 地址":"IP Endereço",
	"MAC地址":"MAC Endereço",
	"IP地址":"IP Endereço",
	"有效时间":"Tempo de Conexão",
	"状 态":"Status",
	"编 辑":"Editar",
	"设置向导-上网方式":"Assistente de configuração - way Internet",
	"设置向导 - 无线频段":"Assistente de Instalação - Espectro Wireless",
	"设置向导 - 无线设置 2.4GHz":"Assistente de Instalação - as configurações sem fio de 2,4GHz",
	"设置向导 - 无线设置 5GHz":"Assistente de Instalação - as configurações sem fio de 5GHz",
	"帮助－动态IP设置":"Ajuda - configurações de IP Dinâmico",
	"WAN口速率和双工模式设置":"WAN velocidade da porta e as configurações de modo duplex",
	"帮助－LAN口设置":"Ajude configurações de porta -LAN",
	"帮助－	WAN口速率和双工模式设置":"Ajuda - Velocidade da porta WAN e configurações de modo duplex",
	"帮助－MAC地址克隆":"Ajuda - Mac endereço clonagem",
	"帮助－无线网络基本设置":"Ajuda - Configurações básicas Wireless",
	"QSS安全设置":"Configurações de segurança QSS",
	"本页面设置路由器无线网络的安全认证选项。":"Esta página é configurar rede sem fio opções de autenticação de segurança do roteador.",
	"安全提示：为保障网络安全，强烈推荐开启安全设置，并使用WPA-PSK/WPA2-PSK AES加密方法。":"Segurança Dica: Para garantir a segurança da rede, é altamente recomendável para abrir as configurações de segurança e usar WPA-PSK método de criptografia / WPA2-PSK AES.",
	"本页设置 MAC 地址过滤来控制计算机对本无线网络的访问。":"Esta página definir a filtragem de endereços MAC para controlar o acesso a este computador de rede sem fio.",
	"MAC 地址过滤功能：":"Filtro de endereços MAC:",
	"过滤规则":"Regras de Filtragem",
	"禁止":"Banimento",
	"列表中生效的MAC地址访问本无线网络":"Lista de endereços MAC em vigor acesso à rede sem fio",
	"QSS安全设置":"Configurações de segurança QSS",
	"共享账户":"Conta Partilhada",
	"UPnP设置":"Configurações do UPnP",
	"重新启动":"Reiniciar",
	"家长控制设置":"Definições do Controlo Parental",
	"上网控制规则管理":"Regras de Controle de Internet Gestão",
	"主机列表设置":"Hospedar Configurações da Lista",
	"访问目标设置":"Acesso Goal Setting",
	"日程计划设置":"Definir Programação",
	"IP带宽控制设置":"Configurações de controle de largura de banda IP",
	"IP带宽控制规则列表":"IP lista de regras de controle de largura de banda",
	"动态DNS设置":"Configurações de DNS dinâmicos",
	"备份和载入配置文件":"Perfis de Backup e de Carga",
	"添加媒体服务器文件夹":"Adicionar Servidor de Média",
	"添加或修改共享账户":"dicionar ou Remover Conta de Compartilhamento"
};

var dict_ch2eng_description = {
	"IP地址：":"Endereço IP",
	"IP 地址：":"Endereço IP",
	"MAC地址：":"Endereço MAC:",
	"子网掩码：":"Máscara de Sub-Rede:",
	"网关：":"Gateway:",
	"数据包MTU(字节)：":"Pacote MTU (bytes):",
	"数据包MTU（字节）：":"Pacote MTU (bytes):",
	"当前软件版本：":"Software:",
	"当前硬件版本：":"Hardware:",
	"MAC 地址：":"Endereço MAC:",
	"DNS 服务器：":"Endereço DNS:",
	"无线功能：":"Wireless:",
	"信 道：":"Canal:",
	"模 式：":"Modo:",
	"频段带宽：":"Banda Bandwidth:",
	"SSID号：":"Número SSID:",
	"自动":"Automâtica",
	"WDS状态：":"WDS Status:",
	"未开启":"Não Ligado",
	"WAN口连接类型：":"Tipo de conexão da porta WAN:",
	"DNS服务器：":"Servidor DNS:",
	"备用DNS服务器：":"Servidor Alternativo de DNS:",
	"主机名：":"Nome do Host:",
	"本页设置LAN口的基本网络参数。":"Esta página é configuração dos parâmetros básicos de rede da porta LAN.",
	"本页设置路由器对广域网的MAC地址。":"Esta página é configurar o roteador para o endereço WAN MAC.",
	"当前管理PC的MAC地址：":"Endereço MAC do computador conectado *:",
	"注意：只有局域网中的计算机才能使用本功能。":"*Nota: Apenas o computador conectado LAN pode usar esse recurso.",
	"无线模式：":"Wireless Modo:",
	"信道：":"Canal:",
	"本页面设置路由器无线网络的基本参数。":"Esta página é definir os parâmetros básicos da Wireless.",
	"QSS功能：":"Função QSS:",
	"当前PIN码：":"Atual PIN:",
	"添加新设备：":"Adicionar outro Dispositivo:",
	"认证类型：":"Tipo de Autentificação:",
	"加密算法：":"Algoritmo de Criptografia:",
	"PSK密码：":"Senha PSK:",
	"组密钥更新周期：":"Chave de Grupo período de atualização:",
	"Radius服务器IP：":"Servidor IP Radius:",
	"Radius端口：":"Radius Porta:",
	"Radius密码：":"Radius Senha:",
	"WEP密钥格式：":"WEP Senha Formato:",
	"密钥 1：":"Chave 1",
	"密钥 2：":"Chave 2",
	"密钥 3：":"Chave 3",
	"密钥 4：":"Chave 4",
	"密钥选择":"Selecionar Chave",
	"WEP密钥":"WEP Chave",
	"密钥类型":"Tipo de Chave",
	"缺省域名：":"Nome Domínio Padrão:",
	"主DNS服务器：":"DNS Primário:",
	"DHCP服务器：":"DHCP Servidor:",
	"地址池开始地址：":"Endereço inicial de pool:",
	"地址池结束地址：":"Endereço final de pool:",
	"地址租期：":"Concessão de Endereço:",
	"本路由器内建的DHCP服务器能自动配置局域网中各计算机的TCP/IP协议。":"O roteador embutido servidor DHCP pode configurar automaticamente a LAN protocolo TCP / IP de cada computador.",
	"本页设置DHCP服务器的静态地址分配功能。":"Esta página é criada a função de servidor DHCP atribuição de endereço estático.",
	"不开启无线安全":"Wireless segurança desativada",
	"PPPoE连接:":"PPPoE conexão:",
	"上网账号：":"Usuário:",
	"上网帐号：":"Usuário",
	"上网口令：":"Senha:",
	"确认口令：":"Confirmar Senha:",
	"特殊拨号：":"Marcação Especial:",
	"第二连接：":"Segunda Conexão:",
	"根据您的需要，请选择对应的连接模式：":"Dependendo de suas necessidades, por favor selecione o modo de conexão correspondente:",
	"按需连接，在有访问时自动连接":"Demanda de Conexão",
	"按需连接，在有访问数据时自动进行连接":"Conexão por Demanda",
	"自动连接，在开机和断线后自动连接":"Conecte-se automaticamente",
	"定时连接，在指定的时间段自动连接":"Conecte-se automaticamente no horário especificado",
	"手动连接，由用户手动连接":"Conecte-se Manualmente",
	"注意：只有当您到“系统工具”菜单的“时间设置”项设置了当前时间后，“定时连接”功能才能生效。":"Nota: A definição do tempo correto deve ser configurado",
	"自动断线等待时间：":"Desconexão Automâtica tempo ocioso",
	"服务器 IP /域名：":"Servidor IP / Nome do Dominio:",
	"bbb":"",
	"本页设置路由器的系统时间，您可以选择自己设置时间或者从互联网上获取标准的GMT时间。":"Esta página define a hora do sistema do roteador, você pode optar por criar o seu próprio tempo ou obter tempo GMT padrão a partir da Internet.",
	"注意：关闭路由器电源后，时间信息会丢失，当您下次开机连上Internet后，路由器将会自动获取GMT时间。您必须先连上Internet获取GMT时间或到此页设置时间后，其他功能（如上网控制）中的时间限定才能生效。":"Nota: Desligue a energia do roteador, a informação do tempo será perdido na próxima inicialização conectado à Internet, o roteador irá obter automaticamente a hora GMT. Você deve estar conectado à Internet para obter a hora GMT ou definir o tempo para esta página, as outras funções (como controle de acesso) no limite de tempo para ter efeito.",
	"本向导可设置上网所需的基本网络参数，请单击“下一步”继续。若要详细设置某项功能或参数，请点击左侧相关栏目。":"O assistente para definir parâmetros básicos de rede necessários para a Internet, clique em “Próximo” para continuar. Para configurar uma função ou parâmetros em detalhes, por favor, clique na seção pertinente à esquerda.",
	"WAN口未连接！":"Porta WAN não está conectada!",
	"自动":"Automâtico",
	"当前信道":"Canal Atual",
	"接收":"Recebido",
	"发送":"Enviado",
	"字节数：":"Contagem de Objetos:",
	"数据包数：":"Pacotes:",
	"运行时间：":"Tempo de Funcionamento:",
	"天":"Dias",
	"本向导提供三种最常见的上网方式供选择。若为其它上网方式，请点击左侧“网络参数”中“WAN口设置”进行设置。如果不清楚使用何种上网方式，请选择“让路由器自动选择上网方式”。":"Este guia fornece três dos meios mais comuns de acesso disponível. Se é um outro meio de acesso, por favor clique na esquerda “parâmetros de rede” “configurações da porta WAN” set. Se você não sabe qual o caminho a utilizar a Internet, selecione “roteador de Internet para selecionar automaticamente o modo.”",
	"本路由器支持双频无线，您可以在本页设置无线工作的频段。":"O rotiador suporta dual-band sem fio, você pode configurar a Banda de Wireless nesta página.",
	"本向导页面设置路由器无线网络的基本参数以及无线安全。":"Esta página do assistente para definir os parâmetros básicos e o roteador sem fio de segurança de rede sem fio.",
	"无线状态：":"Status sem fio:",
	"	开 启":"Ativada",
	"频段：":"Banda",
	"无线安全选项：":"Opções de segurança sem fio:",
	"为保障网络安全，强烈推荐开启无线安全，并使用WPA-PSK/WPA2-PSK AES加密方式。":"Para garantir a segurança da rede, é altamente recomendável para abrir a segurança sem fio e usar WPA-PSK / WPA2-PSK AES.",
	"（8-63个ASCII码字符或8-64个十六进制字符）":"(8-63 8-64 caracteres ASCII ou caracteres hexadecimais)",
	"提示：若路由器重启后仍不能正常上网，请点击左侧“网络参数”进入“WAN口设置”栏目，确认是否设置了正确的WAN口连接类型和拨号模式。":"Dica: Se você ainda não consegue acessar normalmente a reinicialização do roteador, por favor clique na esquerda “parâmetros de rede” na seção “configurações da porta WAN”, verifique se o tipo de conexão da porta WAN e marcação modo correto.",
	"提示：若路由器仍不能正常上网，请点击左侧“网络参数”进入“WAN口设置”栏目，确认是否设置了正确的WAN口连接类型和拨号模式。":"Dica: Se o roteador ainda não pode acessar a Internet, por favor, clique no lado esquerdo dos “parâmetros de rede” na seção “configurações da porta WAN”, verifique se o tipo de conexão da porta WAN e marcação modo correto.",
	"（默认是1500，如非必要，请勿修改）":"(O padrão é 1500, se não for necessário, não modifique)",
	"手动设置DNS服务器":"Configurações do servidor DNS manualmente",
	"（可选）":"(Opcional)",
	"单播方式获取IP （一般情况下请勿选择）":"Unicast maneira de obter IP (Não selecione geral)",
	"请根据您的Internet服务供应商（ISP）所提供的上网方式来选择相应的连接类型。例如，如果您可以从ISP获取由DHCP服务器自动分配的IP地址，请选择“动态IP”；如果您拥有ISP提供的固定IP地址，请选择“静态IP”；如果您的上网的方式为ADSL虚拟拨号方式，请选择“PPPoE”。":"Por favor, selecione o tipo de conexão apropriado de acordo com os meios de acesso ao seu provedor de serviços de Internet (ISP) para oferecer. Por exemplo, se você pode obter pelo servidor DHCP para atribuir automaticamente um endereço IP a partir do ISP, selecione “IP Dinâmico”, se você tem um endereço IP fixo fornecido pelo seu ISP, selecione “IP Estático”, se você acessar a Internet por ADSL virtual modo de marcação, selecione “PPPoE”.",
	"从ISP的DHCP服务器动态得到的IP地址。":"A partir do servidor DHCP do ISP obter dinamicamente um endereço IP.",
	"从ISP的DHCP服务器动态得到的子网掩码。":"A partir do servidor DHCP do ISP obter dinamicamente máscara de sub-rede.",
	"从ISP的DHCP服务器动态得到的网关。":"A partir do servidor DHCP do ISP obter dinamicamente gateway.",
	"数据包MTU：":"Pacote MTU:",
	"输入范围是576 ～ 1500，缺省为1500。":"Faixa de entrada é de 576 a 1500, o padrão é 1500.",
	"从ISP的DHCP服务器动态得到的DNS服务器，或者您可以在此处手动设置自己的DNS服务器。":"A partir do servidor DHCP do ISP obtida dinamicamente do servidor DNS, ou você pode criar o seu próprio servidor DNS manualmente aqui.",
	"从ISP的DHCP服务器动态得到的备用DNS服务器，或者您可以在此处手动设置自己的备用DNS服务器。":"Servidor DNS alternativo a partir do servidor DHCP do seu ISP obter de forma dinâmica, ou você pode criar o seu próprio servidor de backup DNS manualmente aqui.",
	"设置路由器的主机名（DHCP Host Name）。":"Defina o nome do host do roteador (DHCP Nome do Host).",
	"单播方式获取IP：":"Unicast maneira de obter IP:",
	"少数ISP的DHCP服务器不支持广播的请求方式，如果您在网络连接正常的情况下无法获取IP地址，可以选择单播的方式。（一般情况下不需要选择此项）":"Servidor DHCP Poucos do ISP não suporta as aplicações de transmissão, você não pode obter um endereço IP, em circunstâncias normais, se você estiver conectado em uma rede, você pode escolher o modo unicast. (Em circunstâncias normais, não precisa selecionar esta opção)",
	"按钮功能":"Botão Função",
	"自动检测：":"A detecção automática:",
	"如果您不清楚应选择何种WAN口连接类型，请点击此按钮来查看ISP所提供的上网方式。检测结果仅供参考，详情请咨询您的ISP。":"Se você não sabe o que o tipo de conexão WAN deve ser selecionado, clique neste botão para visualizar os métodos de acesso fornecidos pelo ISP. Os resultados dos testes apenas para referência, por favor, consulte o seu ISP.",
	"更新：":"Atualizar:",
	"单击此按钮，您可以从ISP的DHCP服务器更新WAN口的IP地址、子网掩码、网关、DNS服务器等设置。":"Clique nesse botão, você pode atualizar o endereço IP da porta WAN, máscara de sub-rede, gateway, servidores de DNS e outras configurações de servidor DHCP do ISP.",
	"释放：":"Lançamento:",
	"单击此按钮，本路由器将发送DHCP释放请求到ISP的DHCP服务器，释放IP设置。":"Clique nesse botão, este roteador irá enviar um pedido de liberação de DHCP para o servidor DHCP do ISP para liberar as configurações de IP.",
	"本页设置WAN口的速率和双工模式。":"Configurações de página WAN velocidade da porta e modo duplex.",
	"当前模式：":"Modo atual:",
	"模式设置：":"Definições de modo:",
	"本路由器支持双频无线，该页可设置无线工作的频段。":"O router suporta dual-band sem fio, wireless trabalho a página pode ser definida-band.",
	"注意：":"Nota:",
	"本路由器对局域网的MAC地址，此值不可更改。":"O roteador no endereço LAN MAC, esse valor não pode ser alterado.",
	"本路由器对局域网的IP地址，局域网中所有计算机的默认网关必须设置为该IP地址。":"O endereço IP do roteador no gateway padrão LAN, LAN para todos os computadores devem ser definidos para o endereço IP.",
	"本路由器对局域网的子网掩码，一般为255.255.255.0，局域网中所有计算机的子网掩码必须与此处设置相同。":"O roteador na máscara de sub-rede LAN, normalmente 255.255.255.0, todos os computadores da máscara de sub-rede local deve ser definido o mesmo aqui.",
	"恢复出厂MAC：":"Restaurar MAC de Fábrica:",
	"克隆MAC地址：":"Clonar Endereço de MAC:",
	"注意： 只有局域网中的计算机才能使用“MAC地址克隆”功能。":"Nota: Apenas os computadores da rede local pode usar o recurso “Clone MAC Address”.",
	"本路由器对广域网的MAC地址，此值一般不用更改。但某些ISP可能会要求对MAC地址进行绑定，此时ISP会提供一个有效的MAC地址给用户，您只要根据它所提供的值，输入到“MAC地址”栏，然后单击“保存”，即可改变本路由器对广域网的MAC地址。":"Endereço WAN MAC do roteador, em geral, não alterar este valor. Mas alguns ISP pode exigir endereço MAC de ligação, em seguida, o ISP vai fornecer um endereço MAC válido para o usuário, com base no valor que você, desde que fornece a entrada para o bar “Endereço MAC”, em seguida, clique em “Salvar” pode alterar o router WAN endereço MAC.",
	"当前正在进行管理操作的计算机的MAC地址。":"O atual endereço MAC do computador que está sendo gerenciado operações.",
	"单击此按钮，您即可恢复本路由器对广域网的MAC地址为出厂时的默认设置。":"Clique nesse botão, você pode restaurar as configurações de fábrica do WAN MAC.",
	"单击此按钮，您即可把当前管理PC的MAC地址填入到“MAC地址”栏内。":"Clique nesse botão, você pode gerenciar o endereço MAC do PC atual para o campo “Endereço MAC”.",
	"开启SSID广播":"Vire a transmissão de SSID",
	"开启WDS":"Abrir WDS",
	"您需要设置的无线设置条目如下：":"Você precisará configurar a entrada de configurações sem fio da seguinte forma:",
	"SSID广播：":"SSID Broadcast:",
	"开启WDS：":"Abertas WDS:",
	"QSS功能：":"Função QSS:",
	"已开启":"Virando",
	"锁定路由PIN码":"PIN roteamento de bloqueio do código",
	"传输功率:":"Potência de Transmissão:",
	"Beacon时槽：":"Ranhura Beacon:",
	"RTS时槽：":"Ranhura RTS:",
	"分片阈值：":"Limiar de fragmentação:",
	"DTIM阈值：":"DTIM Threshold:",
	"开启 WMM":"Abrir WMM",
	"开启 Short GI":"Curto GI aberto",
	"开启 AP隔离":"AP isolamento aberto",
	"本页显示连接到本无线网络的所有主机的基本信息。":"Esta página exibe informações básicas conectado à rede sem fio para todos os hosts.",
	"当前所连接的主机数：":"O número atual de máquinas conectadas:",
	"当前状态":"Status Atual",
	"接收数据包数":"Pacotes Recebidos",
	"发送数据包数":"Pacotes Enviados",
	"（单位为秒，最小值为30，不更新则为0）":"(Em segundos, o mínimo é de 30, não atualiza ou 0)",
	"（1－65535，0表示默认端口：1812":"(1-65535,0 representa a porta padrão: 1812)",
	"（单位为秒，最小值为30，不更新则为0）":"(Em segundos, o mínimo é de 30, não atualiza ou 0)",
	"不启用":"Não Habilitado",
	"启用":"Habilitado",
	"分钟 （1～2880分钟，缺省为120分钟）":"Minutos (1-2880 minutos, o padrão é de 120 minutos)",
	"本页设置网络共享服务的基本参数。":"Página definir os parâmetros básicos dos serviços de rede compartilhada.",
	"设备状态：":"Status:",
	"已启用":"Ativado",
	"使用密码访问":"Usar Senha para Acessar",
	"卷":"Volume",
	"总容量":"Total",
	"已使用":"Usado",
	"剩余":"Livre",
	"使用量":"% Usado",
	"共享控制":"Controle",
	"本页设置FTP服务的基本参数。":"Página definir os parâmetros básicos do serviço FTP.",
	"服务状态：":"Status do Serviço:",
	"允许WAN口访问：":"Porta WAN permite o acesso a:",
	"启用":"Habilitar",
	"不启用":"Desabilitar",
	"FTP端口：":"Porta FTP:",
	"WAN口地址：":"WAN endereço da porta:",
	"（缺省值为21，如非必要，请勿修改）":"(O padrão é 21, se não for necessário, não modifique)",
	"分区":"Divisória",
	"文件夹位置":"Local da Pasta",
	"当前列表为空。":"Lista Vazia",
	"当前的列表为空。":"Lista Vazia",
	"本页设置媒体服务器的基本参数。":"Página definir os parâmetros básicos do servidor de mídia.",
	"服务器名称：":"Nome do Servidor:",
	"服务器状态：":"Status do Servidor:",
	"自动扫描":"Verificação Automâtica",
	"本页设置打印服务器的基本参数。":"Página definir os parâmetros básicos do servidor de impressão.",
	"打印服务器状态：":"O status do servidor de impressão:",
	"在线":"Online",
	"本页设置共享服务器的管理者和使用者的账户。":"Página criada uma conta de administrador do servidor e usuários comuns.",
	"读写":"Completo",
	"是":"Sim",
	"编辑":"Editar",
	"注意： 只有当NAT启用时，硬件NAT的设置才能生效。":"Nota: Só quando NAT está habilitado, configurações de NAT hardware para ter efeito.",
	"NAT状态：":"NAT Status:",
	"硬件NAT状态：":"Hardware Status NAT:",
	"启 用":"Habilitar",
	"停 用":"Desabilitar",
	"启用":"Habilitar",
	"不启用":"Desabilitar",
	"虚拟服务器定义了广域网外部端口和局域网网络服务器之间的映射关系，所有对该广域网外部端口的访问将会被重定位给通过IP地址指定的局域网网络服务器。":"Virtual Server define o mapeamento entre os servidores WAN e LAN porta externa, o acesso externo a todos da porta WAN será transferida para o endereço IP especificado do servidor de rede LAN.",
	"注意： 只有当NAT开启时，虚拟服务器的设置生效。":"Nota: Só quando NAT é ligado, configurar um servidor virtual para fazer efeito.",
	"外部端口":"Porta Externas",
	"内部端口":"Portas Interna",
	"协议":"Acordo",
	"某些程序需要多条连接，如Internet游戏，视频会议，网络电话等。由于防火墙的存在，这些程序无法在简单的NAT 路由下工作。特殊应用程序使得某些这样的应用程序能够在NAT路由下工作。":"Alguns programas exigem múltiplas conexões, como jogos de Internet, videoconferência, telefonia via Internet. Por causa do firewall, esses programas não funcionam em um roteador NAT simples. Aplicações Especiais faz algumas destas aplicações para trabalhar sob o roteamento NAT.",
	"触发端口":"Porta Triger",
	"触发协议":"Protocolo desencadeada",
	"开放端口":"Portas Abertas",
	"开放协议":"Abrir protocolo",
	"在某些特殊情况下，需要让局域网中的一台计算机完全暴露给广域网，以实现双向通信，此时可以把该计算机设置为DMZ主机。":"Em alguns casos especiais, a necessidade de deixar um computador de rede de área local completamente exposta à rede de área ampla, a fim de conseguir uma comunicação de duas vias, em seguida, você pode colocar o computador para o host DMZ.",
	"DMZ 状态：":"Status DMZ:",
	"DMZ 主机IP地址":"DMZ Host Address IP",
	"本页设置/显示UPnP的设置以及工作状态。":"Configurações de página / Mostrar configurações UPnP e condição de trabalho.",
	"当前UPnP状态：":"Status atual UPnP:",
	"应用描述":"Descrição",
	"协议类型":"Tipo Protocolo",
	"当前UPnP设置列表":"UPnP atual lista de configurações",
	"开启":"Aberto",
	"某些程序需要多条连接，如Internet游戏，视频会议，网络电话等。由于防火墙的存在，这些程序无法在简单的NAT 路由下工作。特殊应用程序使得某些这样的应用程序能够在NAT路由下工作。":"Alguns programas exigem múltiplas conexões, como jogos de Internet, videoconferência, telefonia via Internet. Por causa do firewall, esses programas não funcionam em um roteador NAT simples. Aplicações Especiais faz algumas destas aplicações para trabalhar sob o roteamento NAT.",
	"DMZ 主机IP地址：":"DMZ Host IP Endereço:",
	"当前UPnP状态：":"Status atual UPnP:",
	"单击此按钮将使路由器重新启动。":"Ao clicar neste botão fará com que o router reinicie.",
	"正在重新启动":"Reiniciando",
	"操作成功":"Operação bem sucedida",
	"请稍候。如果您的浏览器没有自动刷新，请点击浏览器的“刷新”按钮。":"Por favor, aguarde. Se seu navegador não recarregar automaticamente, clique no botão “Atualizar” do seu navegador.",
	"某些程序需要多条连接，如Internet游戏，视频会议，网络电话等。由于防火墙的存在，这些程序无法在简单的NAT 路由下工作。特殊应用程序使得某些这样的应用程序能够在NAT路由下工作。":"Alguns programas exigem múltiplas conexões, como jogos de Internet, videoconferência, telefonia via Internet. Por causa do firewall, esses programas não funcionam em um roteador NAT simples. Aplicações Especiais faz algumas destas aplicações para trabalhar sob o roteamento NAT.",
	"本页对各个基本安全功能的开启与关闭进行设置。":"Esta página sobre a abertura e fechamento de cada funções básicas de segurança pode ser definido.",
	"状态检测防火墙 (SPI)":"Stateful Inspection Firewall (SPI)",
	"SPI 防火墙：":"SPI Firewall:",
	"虚拟专用网络 (VPN)":"Virtual Private Network (VPN)",
	"PPTP 穿透":"Entrada PPTP",
	"L2TP 穿透":"Entrada L2TP",
	"IPSec 穿透":"Entrada IPSec",
	"应用层网关 (ALG)":"Aplicação Mascâra de Gateway (ALG)",
	"本页设置局域网中可以执行WEB管理的计算机的MAC地址。":"Computadores página Configurações da LAN pode executar o gerenciamento WEB endereço MAC.",
	"允许所有内网主机访问本WEB管理页面":"Permitir que todos os hosts dentro da gestão da rede de acesso à página WEB",
	"仅允许列表中的MAC地址访问本WEB管理页面":"Só permite o acesso à lista de endereços MAC da página de gerenciamento WEB",
	"MAC地址 1：":"Endereço MAC 1:",
	"MAC地址 2：":"Endereço MAC 2:",
	"MAC地址 3：":"Endereço MAC 3:",
	"MAC地址 4：":"Endereço MAC 4:",
	"注意：您可以通过按下路由器上的复位按钮将路由器的所有设置恢复到出厂时的默认状态。":"Nota: Você pode pressionar o botão de reiniciar o roteador irá restaurar todas as configurações do roteador para o estado padrão de fábrica.",
	"1、路由器默认的WEB管理端口为80，如果您改变了默认的WEB管理端口（例如改为88），则您必须用“IP地址:端口”的方式（例如http://192.168.1.1:88）才能登录路由器执行WEB界面管理。此功能需要重启路由器才能生效。":"1, a porta de gerenciamento WEB roteador padrão é 80, se você alterar a porta de gerenciamento WEB padrão (por exemplo a 88), você deve usar o “endereço IP: port” abordagem (por exemplo http://192.168.1.1:88 ), a fim de entrar no roteador para executar o gerenciamento de interface WEB. Esse recurso requer uma reinicialização do roteador para fazer efeito.",
  "2、路由器默认的远端WEB管理IP地址为0.0.0.0，在此默认状态下，广域网中所有计算机都不能登录路由器执行远端WEB管理，如果您改变了默认的远端WEB管理IP地址（例如改为202.96.12.8），则广域网中只有具有指定IP地址（例如202.96.12.8）的计算机才能登录路由器执行远端WEB管理。如果将远端WEB管理IP地址设为255.255.255.255，那么，广域网中所有的计算机都可以登录路由器执行远端WEB管理。":"2, o endereço IP do roteador padrão para gerenciamento remoto WEB 0.0.0.0, este padrão, todos os computadores na WAN router não pode fazer logon para executar o gerenciamento WEB remoto, se você alterar o endereço IP de gerenciamento WEB remoto padrão (por exemplo, computador para entrar no roteador para 202.96.12.8), a WAN, apenas com o endereço de IP específico (por exemplo 202.96.12.8) a execução remota de gestão WEB. Se o endereço IP de gerenciamento WEB remoto está definido para 255.255.255.255, em seguida, todos os computadores WAN roteador pode fazer logon para executar o gerenciamento remoto WEB.",
	"3、如果WEB管理端口与“转发规则”中虚拟服务器条目的端口产生冲突，当您保存配置时，存在端口冲突的虚拟服务器条目将被自动禁用。":"3. Se a porta porta WEB gestão e as “regras de envio” no conflito entrada de servidor virtual, quando você salvar a configuração, os conflitos de porta de entrada do servidor virtual será desativado automaticamente.",
	"本页设置路由器的WEB管理端口和广域网中可以执行远端WEB管理的计算机的IP地址。":"Página definir porta de gerenciamento WEB do roteador e endereço IP WAN pode realizar computador de gerenciamento WEB remoto.",
	"WEB管理端口：":"Porta de gerenciamento WEB:",
	"远端WEB管理IP地址：":"Endereço IP de gerenciamento remoto WEB:",
	"作为家长，您可以通过本页面进行设置，控制小孩的上网行为，使得小孩的PC只能在指定时间访问指定的网站。":"Como pai, você pode folhear esta configuração, o comportamento on-line de controle das crianças, fazendo PC da criança pode acessar o site especificado em um determinado momento.",
	"不在规则列表中的非家长PC将无法上网。":"Não na lista de regras de PC não-parental não será online.",
	"家长控制：":"Controlo Parental:",
	"家长PC1的MAC地址：":"MAC do PC1 dos Pais:",
	"家长PC2的MAC地址：":"MAC do PC2 dos Pais:",
	"家长PC3的MAC地址：":"MAC do PC3 dos Pais:",
	"家长PC4的MAC地址：":"MAC do PC4 dos Pais:",
	"网站列表":"Websites",
	"配置":"Configuração",
	"当前列表为空":"A lista atual está vazio",
	"当前第":"Atual",
	"页":"Página",
	"路由器可以限制内网主机的上网行为。在本页面，您可以打开或者关闭此功能，并且设定默认的规则。更为有效的是，您可以设置灵活的组合规则，通过选择合适的“主机列表”、“访问目标”、“日程计划”，构成完整而又强大的上网控制规则。":"Os roteadores podem restringir o comportamento Internet dentro do host da rede. Nesta página, você pode ativar ou desativar esse recurso e definir a regra padrão. Mais eficiente, você pode configurar uma combinação flexível de regra selecionando a opção “lista de host” apropriado ,“o acesso ao destino”, “agenda”, algumas regras de controle de acesso completo e poderoso.",
	"开启上网控制":"Controle de acesso aberto",
	"缺省过滤规则":"As regras de filtragem padrão",
	"只有符合已设上网控制规则的数据包，允许通过本路由器":"Somente aqueles de controle de acesso já estabelecidas regras pacotes através do roteador para permitir",
	"只有符合已设上网控制规则的数据包，禁止通过本路由器":"Somente aquelas já estabelecidas regras de controle de acesso pacotes proibidos por este router",
	"规则描述":"Descrição da regra",
	"第":"Artigo",
	"条到第":"Para artigo",
	"条":"Artigo",
	"当前第":"Atual",
	"本页设置内部主机列表信息":"Esta página apresenta as informações da lista de host interno",
	"主机名":"Nome do Host",
	"主机信息":"Informações do Anfitrião",
	"本页设置访问目标信息":"Esta página está definido para acessar as informações de destino",
	"目标描述":"Descrição da Meta",
	"详细信息":"Detalhes",
	"本页设置上网控制的日程计划":"O controle de acesso cronograma página de configurações",
	"日程描述":"Descrição",
	"星期":"Semana",
	"时间":"Tempo",
	"本页设置路由器的静态路由信息。":"Página configurar as informações de roteamento estático router.",
	"目的网络地址":"O objectivo do endereço de rede",
	"子网掩码":"Máscara de sub-rede",
	"网关":"Porta de Entrada",
	"接口":"Interface",
	"本页对IP带宽控制的开启与关闭进行设置。只有IP带宽控制的总开关是开启的时候，后续的“IP带宽控制规则”才能够生效，反之，则失效。":"Esta página para abrir e fechar as configurações de controle de largura de banda IP. Apenas interruptor principal controle de banda IP é ligado quando o follow-up “regras de controle de largura de banda IP” para poder entrar em vigor, pelo contrário, é inválido.",
	"1、带宽的换算关系为：1Mbps = 1024Kbps；":"1. A relação de conversão de largura de banda: 1Mbps = 1024kbps;",
	"2、选择宽带线路类型及填写带宽大小时，请根据实际情况进行选择和填写，如不清楚，请咨询您的带宽提供商（如电信、网通等）；":"2. Quando você selecionar o tipo de linhas de banda larga e preencher o tamanho da largura de banda, por favor, escolher de acordo com a situação real e preencher, como claro, consultar seus provedores de banda (como Telecom, China Netcom, etc.);",
	"3、修改下面的配置项后，请点击“保存”按钮，使配置项生效。":"3. Modifique o seguinte item de configuração, clique no botão “Salvar” para ser válido.",
	"开启IP带宽控制":"Abrir controle de banda IP",
	"请选择您的宽带线路类型：":"Por favor, selecione o seu tipo de linha de banda larga:",
	"上行总带宽：":"Total de banda de Upload:",
	"下行总带宽：":"Total de banda de Download:",
	"ADSL线路":"ADSL",
	"其它线路":"Outras",
	"本页为IP带宽控制规则列表。":"Este é o IP lista de regras de controle de largura de banda.",
	"描述":"Descrição",
	"上行带宽(Kbps)":"Largura de Banda Upload (Kbps)",
	"下行带宽(Kbps)":"Largura de Banda Download (Kbps)",
	"最小":"Mín",
	"最大":"Max",
	"配 置":"Configurações",
	"本页设置单机的MAC地址和IP地址的匹配规则":"Estas regras página condizer único endereço MAC e endereço IP",
	"ARP绑定：":"Vinculativo ARP:",
	"绑定":"Obrigatório",
	"未绑定":"Unbound",
	"服务提供者：":"Provedor de serviços:",
	"用户名：":"Nome de usuário:",
	"密 码： ":"Senha:",
	"启用DDNS：":"Ativar DDNS:",
	"连接状态：":"Status",
	"服务类型：":"Tipo de Serviço:",
	"域名信息：":"Informações de domínio:",
	"您成功登录之后，需要先退出才能使用其他帐号登录。":"Depois de ter registrado com sucesso, você precisa para sair, a fim de usar outra conta para fazer login.",
	"无":"Não",
	"本页设置“Oray.com花生壳DDNS”的参数。":"Configurações da página “shell Oray.com amendoim DDNS” parâmetro.",
	"时区： ":"Fuso horário:",
	"日期：":"Data:",
	"年":"Ano",
	"月":"Mês",
	"日":"Dia",
	"时间：":"Hora:",
	"优先使用NTP服务器1：":"1º Servidor NTP:",
	"优先使用NTP服务器2：":"2º Servidor NTP:",
	"（仅在连上互联网后才能获取GMT时间）":"(Apenas após a conexão com a Internet para obter a hora GMT)",
	"在本页面可以使用ping或者tracert，诊断路由器的连接状态。":"Nesta página, você pode usar o ping ou tracert, diagnosticar o estado da ligação do router.",
	"参数设置":"As definições de parâmetros",
	"选择操作：":"Selecionar Ação:",
	"IP 地址/域名：":"Endereço IP / Nome do Domínio:",
	"Ping 包数目：":"Nº Pacotes Ping:",
	"Ping 包大小：":"Tam Pacotes Ping:",
	"Ping 超时：":"Limite Tempo Ping:",
	"Tracert 跳数：":"Tracert Hops:",
	"（4-1472字节）":"（4-1472 bytes）",
	"（100-2000 毫秒）":"(100-2000 ms)",
	"诊断结果":"Os resultados do diagnóstico",
	"路由器已经就绪。":"Router pronto.",
	"通过升级本路由器的软件，您将获得新的功能。":"Ao atualizar o software do roteador, você terá novos recursos.",
	"文 件：":"Arquivo:",
	"注意：升级时请选择与当前硬件版本一致的软件。升级过程不能关闭路由器电源，否则将导致路由器损坏而无法使用。升级过程约60秒，当升级结束后，路由器将会自动重新启动。":"Nota: Por favor, selecione compatível com a versão do hardware atual da atualização de software. O processo de atualização não for possível desligar o roteador, caso contrário ele irá causar danos ao roteador e não pode ser usado. O processo de atualização por cerca de 60 segundos, quando a atualização for concluída, o roteador irá reiniciar automaticamente.",
	"单击此按钮将使路由器的所有设置恢复到出厂时的默认状态。":"Ao clicar neste botão irá restaurar todas as configurações do roteador para o estado padrão de fábrica.",
	"您可以在这保存您的设置。我们建议您在修改配置及升级软件前备份您的配置文件。":"Você pode salvar suas configurações aqui. Recomendamos que você faça backup de seu arquivo de configuração antes de modificar a configuração e atualizar o software.",
	"您可以通过载入配置文件来恢复您的设置。":"Você pode carregar o arquivo de configuração para restaurar suas configurações.",
	"路 径：":"Caminho:",
	"1、导入配置文件后，设备中原有的用户配置将会丢失。如果您载入的配置文件有误，可能会导致设备无法被管理。":"1. Depois de importar o arquivo de configuração, qualquer configuração de usuário original equipamentos serão perdidos. Se você carregar o arquivo de configuração está incorreto, poderia fazer com que o dispositivo não pode ser gerenciado.",
	"2、载入配置文件的过程不能关闭路由器电源，否则将导致路由器损坏而无法使用。载入过程约20秒，当载入结束后，路由器将会自动重新启动。":"2, o processo de carregamento do ficheiro de configuração não pode ser fechado de energia do router, caso contrário irá causar danos ao router e não pode ser utilizado. Processo de carregamento de cerca de 20 segundos, após o final da carga, o roteador irá reiniciar automaticamente.",
	"本页修改系统管理员的口令，长度为6-15位。":"Esta página modificar a senha de administrador do sistema que deve ser de 6-15 caracters.",
	"原口令：":"Senha Atual:",
	"新口令：":"Nova Senha:",
	"确认新口令：":"Confirmar Nova Senha:",
	"本页显示路由器的系统日志。用户可以分类、分级查看其中部分日志，并且可以保存日志内容或将日志内容通过邮件发送。":"Esta página mostra o log do sistema do roteador. Os usuários podem classificar, classificação visualizar alguns registros, e você pode salvar o conteúdo do registo ou o conteúdo do log por e-mail.",
	"通过邮件定时发送日志功能：":"O envio de uma função de log via e-mail:",
	"未启用":"Não Habilitado",
	"选择要查看的日志类型:":"Tipo:",
	"选择要查看的日志等级:":"Nível:",
	"索引":"Índice",
	"类型":"Tipo",
	"级别":"Nível",
	"日 志 内 容 ":"Conteúdo",
	"本页分别对路由器总的数据流量以及最近 10 秒钟内的数据流量进行了统计。":"Esta página, respectivamente, do total de tráfego de dados no roteador e tráfego de dados nos últimos 10 segundos de uma estatística.",
	"当前流量统计状态：":"O estado atual das estatísticas de tráfego:",
	"数据包统计时间间隔：（5～60）":"Pacote por intervalo estatísticas: (5-60)",
	"自动刷新":"Atulaizar Automâticamente",
	"秒":"Segundos",
	"已关闭":"Fechado",
	"总流量":"Fluxo Total",
	"数据包数":"Pacotes",
	"字节数":"Objetos",
	"当前流量":"Fluxo Corente",
	"当 前 统 计 数 据 为 空":"Vazio",
	"本页设置MAC地址过滤来控制计算机对本无线网络的访问。":"Esta página definir a filtragem de endereços MAC para controlar o acesso a este computador de rede sem fio.",
	"描述：":"Descrição:",
	"状态：":"Status",
	"当前客户端列表为空":"Vazia",
	"名称：":"Nome:",
	"文件夹：":"Pasta:",
	"文件夹位置：":"Local da Pasta:",
	"选择全部 ：":"Selecionar Tudo:",
	"选择":"Escolher",
	"本页可以添加或修改服务器的管理者和使用者的账户。":"Esta página pode adicionar ou modificar as contas de administrador do servidor e do usuário.",
	"注意：共享账户的修改将在服务重启后生效；如仍有问题请参照帮助页面。":"Nota: Modificando contas compartilhadas terão efeito após o reinício do serviço, se você ainda tiver problemas, consulte a página de ajuda.",
	"使用者账号：":"Usuário:",
	"密码：":"Senha:",
	"确认密码：":"Confirmar Senha:",
	"存取权限：":"Permissão:",
	"FTP访问：":"Permitir FTP:",
	"永 久":"Permanente",
	"连接(WPA2-PSK)":"Conexão(WPA2-PSK)",
};

var dict_ch2eng_options = {
	"动态IP":"IP Dinâmico",
	"静态IP":"IP Estático",
	"其它掩码":"Outra máscara de rede",
	"自动":"Automâtico",
	"十六进制":"Hex",
	"ASCII码":"ASCII Código",
	"禁用":"Desabilitado",
	"自动选择拨号模式":"Selecionar automaticamente o modo de discagem",
	"正常拨号模式":"Modo Normal de Discagem",
	"特殊拨号模式1":"Modo de Discagem Especial 1",
	"特殊拨号模式2":"Modo de Discagem Especial 2",
	"特殊拨号模式3":"Modo de Discagem Especial 3",
	"特殊拨号模式4":"Modo de Discagem Especial 4",
	"特殊拨号模式5":"Modo de Discagem Especial 5",
	"特殊拨号模式6":"Modo de Discagem Especial 6",
	"特殊拨号模式7":"Modo de Discagem Especial 7",
	"让路由器自动选择上网方式 (推荐)":"Deixe a seleção automática de roteador de acesso (recomendado)",
	"PPPoE（ADSL虚拟拨号）":"PPPoE (ADSL virtual dial-up)",
	"动态IP（以太网宽带，自动从网络服务商获取IP地址）":"IP Dinâmico (banda larga Ethernet, obter automaticamente um endereço IP do provedor de serviço de rede)",
	"静态IP（以太网宽带，网络服务商提供固定IP地址）":"IP estático (banda larga Ethernet, provedores de serviços de Internet para fornecer um endereço IP fixo)",

	"无线同时工作在2.4GHz和5GHz频段(802.11a/b/g/n/ac)上":"Trabalhar em 2.4GHz e 5GHz de Banda (802.11a/b/g/n/ac)",
	"无线只工作在2.4GHz频段(802.11b/g/n)上":"Só a banda de 2.4GHz (802.11b/g/n) ",
	"无线只工作在5GHz频段(802.11a/n/ac)上":"Só a banda de 5GHz (802.11a/n/ac) ",
	"关闭无线（包括2.4GHz和5GHz频段）。":"Desligar a Wireless",
	"不修改无线安全设置":"Não modificar as configurações de segurança sem fio",
	"自动协商":"Automâtico",
	"100 Mbps 全双工":"100 Mbps full-duplex",
	"100 Mbps 半双工":"100 Mbps half duplex",
	"10 Mbps 全双工":"10 Mbps full-duplex",
	"10 Mbps 半双工":"10 Mbps half duplex",
	"高":"Alto",
	"中":"Méio",
	"低":"Baixo",
	"不启用":"Não Habilitado",
	"启用":"Habilitado",
	
	"2 小时":"2 Horas",
	"6 小时":"6 Horas",
	"12 小时":"12 Horas",
	"24 小时":"24 Horas",
	"48 小时":"48 Horas",
	"启 用":"Habilitar",
	"停 用":"Desabilitar",
	
	"花 生 壳 ( www.oray.com )":"www.oray.com",
	
	"（GMT-12:00）埃尼威托克，夸贾林岛":					"(GMT-12: 00) Eniwetok, Kwajalein",
	"（GMT-11:00）中途岛，萨摩亚群岛":                     "(GMT-11: 00) Midway Island, Samoa",
	"（GMT-10:00）夏威夷":                              "(GMT-10: 00) Hawaii",
	"（GMT-09:00）阿拉斯加":                             "(GMT-09: 00) Alaska", 
	"（GMT-08:00）太平洋时间（美国和加拿大）；蒂华":            "(GMT-08: 00) Hora do Pacífico (EUA e Canadá); Tijuana",
	"（GMT-07:00）山地时间（美国和加拿大）；亚利桑那":           "(GMT-07: 00) Horário das Montanhas (EUA e Canadá); Arizona", 
	"（GMT-06:00）中部时间（美国和加拿大）；中美洲，墨西哥城":     "(GMT-06: 00) Hora Central (EUA e Canadá), América Central, Cidade do México",
	"（GMT-05:00）东部时间（美国和加拿大）；波哥达，利马":        "(GMT-05: 00) Hora do Leste (EUA e Canadá); Bogotá, Lima",
	"（GMT-04:00）大西洋时间（加拿大）；加拉加斯，圣地亚哥":       "(GMT-04: 00) Atlantic Time (Canada); Caracas, Santiago", 

	"（GMT-03:30） 纽芬兰":                             "(GMT-03: 30) Terra Nova",

	"（GMT-03:00）巴西利亚，布宜诺斯艾利斯，乔治敦，格陵兰":     "(GMT-03: 00) Brasília, Buenos Aires, Georgetown, Greenland",
	"（GMT-02:00）中大西洋":                             "(GMT-02: 00), no Atlântico", 
	"（GMT-01:00）佛得角群岛，亚速尔群岛":                  "(GMT-01: 00), Ilhas de Cabo Verde, Açores",
	"（GMT）格林威治平时；都柏林，爱丁堡，伦敦，里斯本":           "(GMT) Greenwich Mean Time, Dublin, Edimburgo, Londres, Lisboa", 
	"（GMT＋01:00）阿姆斯特丹，柏林，罗马，斯得哥尔摩，巴黎":     "(GMT + 01: 00) Amsterdam, Berlim, Roma, Estocolmo, Paris",
	"（GMT＋02:00）开罗，雅典，伊斯坦布尔，明斯克，耶路撒冷":     "(GMT + 02: 00) Cairo, Atenas, Istambul, Minsk, Jerusalém",
	"（GMT＋03:00）巴格达，科威特，利雅得，莫斯科，圣彼得堡":     "(GMT + 03: 00) Bagdá, Kuwait, Riad, Moscou, São Petersburgo",

	"（GMT＋03:30） 德黑兰":                             "(GMT + 03: 30) Tehran", 

	"（GMT＋04:00）阿布扎比，马斯喀特，巴库，第比利斯，埃里温":    "(GMT + 04: 00) Abu Dhabi, Muscat, Baku, Tbilisi, Yerevan", 

	"（GMT＋04:30） 喀布尔":                             "(GMT + 04: 30) Kabul", 

	"（GMT＋05:00）叶卡捷林堡，伊斯兰堡，卡拉奇，塔什干":        "(GMT + 05: 00) Ekaterinburg, Islamabad, Karachi, Tashkent",

	"（GMT＋05:30） 马德拉斯，加尔各答，孟买，新德里":          "(GMT + 05: 30) Madras, Calcutá, Bombaim, Nova Deli",
	"（GMT＋05:45） 加德满都":                           "(GMT + 05: 45) Kathmandu",

	"（GMT＋06:00）阿拉木图，新西伯利亚，阿斯塔纳，达卡":        "(GMT + 06: 00) Almaty, Novosibirsk, Astana, Dhaka",

	"（GMT＋06:30） 仰光":                              "(GMT + 06: 30) Yangon",

	"（GMT＋07:00）曼谷，雅加达，河内":                     "(GMT + 07: 00), Bangkok, Jacarta, Hanoi",
	"（GMT＋08:00）北京，重庆，乌鲁木齐，香港特别行政区，台北":    "(GMT + 08: 00) Beijing, Chongqing, Urumqi, Hong Kong, Taipei", 
	"（GMT＋09:00）东京，大坂，札幌，汉城，雅库茨克":            "(GMT + 09: 00) Tokyo, Osaka, Sapporo, Seoul, Yakutsk", 

	"（GMT＋09:30） 阿德莱德":                           "(GMT + 09: 30) Adelaide",

	"（GMT＋10:00）布里斯班，关岛，堪培拉，墨尔本，悉尼":         "(GMT + 10: 00) Brisbane, Guam, Canberra, Melbourne, Sydney", 
	"（GMT＋11:00）马加丹，索罗门群岛，新喀里多尼亚":           "(GMT + 11: 00) Magadan, Ilhas Salomão, Nova Caledônia", 
	"（GMT＋12:00）富士，勘察加半岛，马绍尔群岛，惠灵顿":        "(GMT + 12: 00) Fuji, Kamchatka, Ilhas Marshall, Wellington",
	"（GMT＋13:00）努库阿洛法":                           "(GMT + 13: 00) Nuku'alofa",	
	
	"全部":"Todos",
	"PPP":"PPP",
	"DHCP":"DHCP",
	"无线":"Wireless",
	"动态DNS":"DNS Dinámico",
	"安全":"Segurança",
	"过滤":"Filtros",
	"网络存储":"Armazenamento de Rede",
	
	"ERROR":"ERRO",
	"WARNING":"ATENÇÃO",
	"NOTICE":"NOTICIA",
	"INFO":"INFORMAÇÃO",
	"ALL":"TODOS",
	
	"按IP地址排序":"Organizados por endereço IP.",
	"按总流量数据包排序":"Mais ou menos o fluxo total de pacotes de dados",
	"按总流量字节数排序":"Mais ou menos tráfego total Bytes",
	"按当前流量数据包排序":"De acordo com o trânsito actual pacote de dados de seqüenciamento",
	"按当前流量字节数排序":"O número atual de bytes por triagem flutuante",
	
	"生效":"Conectar",
	"失效":"Não Conectar",
	
	"读写":"Completo",
	"只读":"Somente Leitura",
	
	"是":"Sim",
	"否":"Não",
	
};

function findAndReplace(searchText, replacement, searchNode) {
    if (!searchText || typeof replacement === 'undefined') {
        // Throw error here if you want...
        return;
    }
    var regex = typeof searchText === 'string' ?
                new RegExp(searchText, 'g') : searchText,
        childNodes = (searchNode || document.body).childNodes,
        cnLength = childNodes.length,
        excludes = 'html,head,style,title,link,meta,script,object,iframe';
    while (cnLength--) {
        var currentNode = childNodes[cnLength];
        if (currentNode.nodeType === 1 &&
            (excludes + ',').indexOf(currentNode.nodeName.toLowerCase() + ',') === -1) {
            arguments.callee(searchText, replacement, currentNode);
        }
        if (currentNode.nodeType !== 3 || !regex.test(currentNode.data) ) {
            continue;
        }
        var parent = currentNode.parentNode,
            frag = (function(){
                var html = currentNode.data.replace(regex, replacement),
                    wrap = document.createElement('div'),
                    frag = document.createDocumentFragment();
                wrap.innerHTML = html;
                while (wrap.firstChild) {
                    frag.appendChild(wrap.firstChild);
                }
                return frag;
            })();
        parent.insertBefore(frag, currentNode);
        parent.removeChild(currentNode);
    }
}

var dict_ch2eng_all={};
$.extend(dict_ch2eng_all, dict_ch2eng, dict_ch2eng_btn, dict_ch2eng_title, dict_ch2eng_options, dict_ch2eng_description ); 

$('document').ready(function(){
	var url_location = window.location.pathname;
	if( url_location == '/userRpm/MenuRpm.htm') {

		// Left Nav Menu
		$('menu').find('ol>a').each(function() {
			var target_text = String.trim( $(this).text() );
			if( dict_ch2eng[target_text] !== undefined ){
				$(this).text( dict_ch2eng[target_text] );
			}
		});

	}
	
	
	// Buttons
	$('input.button').each(function() {
		var target_text = String.trim( $(this).val() );
		if( dict_ch2eng_btn[target_text] !== undefined ) {
			$(this).val( dict_ch2eng_btn[target_text] );
		}
	});
	
	
/*
	// Table Title
	$('tr>td.title,tr>td[class*=ListTC]').each(function(){
		var target_text = String.trim( $(this).text() );
		if( dict_ch2eng_all[target_text] !== undefined ){
			$(this).text( dict_ch2eng_all[target_text] );
		}
	});
*/
	// Table cells ALL
	$('tr>td').each(function() {
		var target_text = String.trim( $(this).text() );
		var target_html = String.trim( $(this).html() );

		if( dict_ch2eng_all[target_text] !== undefined && dict_ch2eng_all[target_text].length > 0) {
			target_html= target_html.replace(target_text,dict_ch2eng_all[target_text]);
			$(this).html( target_html );
			
			/*
			$(this).text( dict_ch2eng_all[target_text] );
			*/
		}
	});

	// Input Options
	$('select>option').each(function() {
		var target_text = String.trim( $(this).text() );
		if( dict_ch2eng_options[target_text] !== undefined && dict_ch2eng_options[target_text].length > 0 ) {
			$(this).text( dict_ch2eng_options[target_text] );
		}
	});

	// resize Text Input fields
	$('form>table').each(function() {
		$(this).find("input").each(function() {
			var input_size = $(this).attr("size");
			if( input_size !== undefined && input_size > 15 ) {
				$(this).attr( "size","15" );
			}
		});
	});
	
	
	for (var prop in dict_ch2eng_description) {
		findAndReplace(prop, dict_ch2eng_description[prop], "");
	}
	
	for (var prop in dict_ch2eng_btn) {
		findAndReplace(prop, dict_ch2eng_btn[prop], "");
	}
	
	for (var prop in dict_ch2eng) {
		findAndReplace(prop, dict_ch2eng[prop], "");
	}
	
	for (var prop in dict_ch2eng_title) {
		findAndReplace(prop, dict_ch2eng_title[prop], "");
	}

	for (var prop in dict_ch2eng_options) {
		findAndReplace(prop, dict_ch2eng_options[prop], "");
	}
    
});

