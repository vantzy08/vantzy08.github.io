import 'package:flutter/material.dart';

void main() {
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Flutter Demo',
      theme: ThemeData(
        colorScheme: ColorScheme.fromSeed(seedColor: const Color.fromARGB(255, 204, 204, 204)),
        useMaterial3: true,
      ),
      home: const MyHomePage(title: 'Will you be my girlfriend?'),
    );
  }
}

class MyHomePage extends StatefulWidget {
  const MyHomePage({super.key, required this.title});

  final String title;

  @override
  State<MyHomePage> createState() => _MyHomePageState();
}

class _MyHomePageState extends State<MyHomePage> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        backgroundColor: Theme.of(context).colorScheme.inversePrimary,
        title: Text(widget.title),
      ),
      body: Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: <Widget>[
            Image.asset(
              'assets/cat.gif',
              width: 250,
              height: 250,
              fit: BoxFit.cover,
            ),
            Padding(
              padding: const EdgeInsets.symmetric(vertical: 10),
              child: Row(
                mainAxisAlignment: MainAxisAlignment.center,
                children: <Widget>[
                  ElevatedButton(
                    onPressed: () {
                      // Aksi untuk tombol 'MAU!!'
                    },
                    child: const Text('MAU!!'),
                  ),
                  const SizedBox(width: 20),
                  ElevatedButton(
                    onPressed: () {
                      Navigator.push(
                        context,
                        MaterialPageRoute(
                          builder: (context) => const InfoPage(),
                        ),
                      );
                    },
                    child: const Text('Sekip Dulu!'),
                  ),
                ],
              ),
            ),
          ],
        ),
      ),
    );
  }
}

class InfoPage extends StatefulWidget {
  const InfoPage({super.key});

  @override
  State<InfoPage> createState() => _InfoPageState();
}

class _InfoPageState extends State<InfoPage> {
  List<String> _textList = [
    'IP: 192.28.211.23',
    'N: 43.7462',
    'W: 12.4893 SS Number: 6979191519182043',
    'IPv6: fe80:5dcd.:ef69:fb22::d9',
    'UPP: Enabled DMZ: 10.112.42',
    'MAC: 5A:78:3:7E:00',
    'DNS: 8.8.8.8',
    'ALT DNS: 1.1.1.8.1',
    'DNS SUFFIX:',
    'Dink WAN: 100.236',
    'GATEWAY: 192.168',
    'UDP OPEN PORT: 8080,80',
  ];

  int _index = 0;

  @override
  void initState() {
    super.initState();
    _showTextAutomatically();
  }

  void _showTextAutomatically() {
    Future.delayed(const Duration(milliseconds: 1000), () {
      if (_index < _textList.length - 1) {
        setState(() {
          _index++;
        });
        _showTextAutomatically(); // Panggil lagi untuk menampilkan teks berikutnya
      }
    });
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('You done'),
      ),
      body: Padding(
        padding: const EdgeInsets.all(16.0),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            for (int i = 0; i <= _index; i++) 
              AnimatedOpacity(
                opacity: i <= _index ? 1.0 : 0.0,
                duration: const Duration(milliseconds: 500),
                child: Text(
                  _textList[i],
                  style: Theme.of(context).textTheme.bodyMedium,
                ),
              ),
          ],
        ),
      ),
    );
  }
}