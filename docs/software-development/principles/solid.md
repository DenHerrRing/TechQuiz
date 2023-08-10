# SOLID

## 1. Single Responsibility Principle (SRP)

Der erste Grundsatz, das Prinzip der `einzigen Verantwortung` (Single Responsibility Principle, SRP), besagt, 
dass eine Klasse `nur einen Grund für eine Änderung haben sollte`. Einfacher ausgedrückt: Jede Klasse sollte nur 
eine `einzige Verantwortung` oder ein `einziges Anliegen` haben. Wenn eine Klasse mehrere Zuständigkeiten übernimmt, 
ist sie eng mit anderen Klassen gekoppelt, was das Verständnis, die Prüfung und die Wartung erschwert.

## 2. Open/Closed Principle (OCP)

Das Open/Closed-Prinzip (OCP) besagt, dass `Softwareeinheiten (Klassen, Module, Funktionen usw.)` `offen für Erweiterungen`, 
aber `geschlossen für Änderungen` sein sollten. Mit anderen Worten: Sie sollten in der Lage sein, das Verhalten einer 
Komponente zu erweitern, ohne ihre bestehende Codebasis zu verändern. Dieser Grundsatz ermutigt Entwickler, 
ihre Systeme so zu gestalten, dass sie durch Vererbung, Schnittstellen oder Plugins leicht erweitert werden können.

## 3. Liskov Substitution Principle (LSP)

Das Liskov-Substitutionsprinzip (LSP) betont, wie wichtig es ist, dass `abgeleitete Klassen` durch ihre Basisklassen 
`ersetzt werden können`, ohne die Korrektheit des `Programms zu beeinträchtigen`. Einfacher ausgedrückt: Objekte einer 
Oberklasse sollten durch Objekte einer Unterklasse ersetzt werden können, ohne das gewünschte Verhalten des Programms 
zu verändern.

## 4. Interface Segregation Principle (ISP)

Das Prinzip der `Schnittstellentrennung` (Interface Segregation Principle, ISP) rät Entwicklern, `kleine, fokussierte 
Schnittstellen` anstelle `großer, monolithischer Schnittstellen` zu entwerfen. Die Kunden sollten nicht gezwungen werden, 
von Schnittstellen abhängig zu sein, die sie nicht benutzen. Im Wesentlichen fördert dieses Prinzip die Aufteilung 
großer Schnittstellen in kleinere, spezifische Schnittstellen, die auf die Bedürfnisse der einzelnen Kunden zugeschnitten sind.

## 5. Dependency Inversion Principle (DIP)

Das Dependency Inversion Principle (DIP) befürwortet die `Umkehrung der traditionellen Abhängigkeitsbeziehung` zwischen 
High-Level- und Low-Level-Modulen. `High-Level-Module sollten nicht von Low-Level-Modulen abhängig` sein; beide sollten 
von Abstraktionen abhängen. Dies fördert die `Entkopplung zwischen Klassen` und ermutigt die Verwendung 
von Schnittstellen oder abstrakten Klassen zur Darstellung von Abhängigkeiten.

### Source [dev.to](https://dev.to/debjit-mandal/building-robust-software-with-solid-design-principles-4ehf)