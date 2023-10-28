import 'package:flutter/material.dart';
import 'package:syncfusion_flutter_charts/charts.dart';

class SolarData {
  final DateTime time;
  final double powerOutput;
  final double energyGenerated;

  SolarData(this.time, this.powerOutput, this.energyGenerated);
}
