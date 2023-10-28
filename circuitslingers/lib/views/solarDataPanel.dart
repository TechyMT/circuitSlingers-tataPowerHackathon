import 'package:circuitslingers/models/SolarData.dart';
import 'package:flutter/material.dart';
import 'package:syncfusion_flutter_charts/charts.dart';

class SolarPanelScreen extends StatefulWidget {
  SolarPanelScreen();

  @override
  State<SolarPanelScreen> createState() => _SolarPanelScreenState();
}

class _SolarPanelScreenState extends State<SolarPanelScreen> {
  @override
  void initState() {
    generateRandomSolarData(20);
    super.initState();
  }

  final List<SolarData> data = [];

  List<SolarData> generateRandomSolarData(int count) {
    final DateTime now = DateTime.now();

    for (int i = 0; i < count; i++) {
      final DateTime time = now.subtract(Duration(minutes: count - i));
      final double powerOutput = 3.5 + (i / 10);
      final double energyGenerated = 30 + (i * 0.5);

      data.add(SolarData(time, powerOutput, energyGenerated));
    }

    return data;
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('Solar Panel Data'),
      ),
      body: Column(
        children: [
          // Real-time power output display
          Padding(
            padding: const EdgeInsets.all(16.0),
            child: Card(
              elevation: 4,
              child: Padding(
                padding: const EdgeInsets.all(16.0),
                child: Column(
                  children: [
                    Text(
                      'Current Power Output',
                      style:
                          TextStyle(fontSize: 20, fontWeight: FontWeight.bold),
                    ),
                    Text(
                      '${data.last.powerOutput} kW',
                      style: TextStyle(fontSize: 24),
                    ),
                  ],
                ),
              ),
            ),
          ),

          // Energy generated chart
          SfCartesianChart(
            primaryXAxis: DateTimeAxis(),
            series: <LineSeries<SolarData, DateTime>>[
              LineSeries<SolarData, DateTime>(
                dataSource: data,
                xValueMapper: (SolarData sales, _) => sales.time,
                yValueMapper: (SolarData sales, _) => sales.energyGenerated,
                name: 'Energy Generated (kWh)',
                color: Colors.blue,
              ),
            ],
          ),
        ],
      ),
    );
  }
}
