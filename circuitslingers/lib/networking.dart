import 'package:http/http.dart' as http;
import 'dart:convert';

Future<void> submitDataToApi(
  String firstName,
  String lastName,
  String city,
  String password,
  String email,
  String state,
  String phone,
  String country
) async {
  final Map<String, dynamic> payload = {
    "firstName": firstName,
    "lastName": lastName,
    "city": city,
    "password": password,
    "email":email,
    "state":state,
    "phone":phone,
    "country":country,
  };

  final String apiUrl = "YOUR_API_ENDPOINT_URL_HERE";

  try {
    final response = await http.post(
      Uri.parse(apiUrl),
      headers: {"Content-Type": "application/json"},
      body: json.encode(payload),
    );

    if (response.statusCode == 200) {
      print("Data submitted successfully!");
    } else {
      print("Failed to submit data. Status code: ${response.statusCode}");
    }
  } catch (e) {
    print("An error occurred: $e");
  }
}