class WeatherData {
  final String cityName;
  final double temperature;
  final String description;
  final double feelslike;
  final double wind;
  final int dt;

  WeatherData({
    required this.dt,
    required this.wind,
    required this.feelslike,
    required this.cityName,
    required this.temperature,
    required this.description,
  });

  factory WeatherData.fromJson(Map<String, dynamic> json) {
    return WeatherData(
      dt: json['dt'],
      feelslike: json['main']['feels_like'].toDouble(),
      cityName: json['name'],
      temperature: json['main']['temp'].toDouble(),
      description: json['weather'][0]['description'],
      wind: json['wind']['speed'],
    );
  }
}
