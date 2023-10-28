import 'package:flutter/material.dart';

class SolarPanelCard extends StatelessWidget {
  final double dailyEnergyGenerated; // Daily energy generated in kWh
  final double costPerKWh; // Cost per kWh in Rupees
  final double totalSavings; // Total savings in Rupees

  SolarPanelCard({
    required this.dailyEnergyGenerated,
    required this.costPerKWh,
    required this.totalSavings,
  });

  double calculateDailySavings() {
    return dailyEnergyGenerated * costPerKWh;
  }

  @override
  Widget build(BuildContext context) {
    return // Specify the desired height here
        Card(
      elevation: 5,
      margin: const EdgeInsets.all(10),
      child: Column(
        children: <Widget>[
          ListTile(
            title: Text(
              'Solar Panel Energy',
              style: TextStyle(fontSize: 18, fontWeight: FontWeight.bold),
            ),
            subtitle:
                Text('Today\'s Energy Generated: $dailyEnergyGenerated kWh'),
          ),
          Padding(
            padding: const EdgeInsets.all(8.0),
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: <Widget>[
                Text(
                  'Money Saved Today',
                  style: TextStyle(fontSize: 16, fontWeight: FontWeight.bold),
                ),
                Text(
                  '₹${calculateDailySavings().toStringAsFixed(2)}',
                  style: TextStyle(fontSize: 20, color: Colors.green),
                ),
              ],
            ),
          ),
          Divider(),
          Padding(
            padding: const EdgeInsets.all(8.0),
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: <Widget>[
                Text(
                  'Total Savings',
                  style: TextStyle(fontSize: 16, fontWeight: FontWeight.bold),
                ),
                Text(
                  '₹${totalSavings.toStringAsFixed(2)}',
                  style: TextStyle(fontSize: 20, color: Colors.green),
                ),
              ],
            ),
          ),
        ],
      ),
    );
  }
}
