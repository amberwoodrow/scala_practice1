object Code {
    // Returns "Hello World!"
    def helloWorld() : String = "Hello World!"

    // Take a single-spaced <sentence>, and capitalize every <n> word starting with <offset>.
    def capitalizeEveryNthWord(sentence:String, offset:Integer, n:Integer) : String = {
      val a = sentence split(' ')
      var c = ""
      for((x,i) <- a.view.zipWithIndex) {
        if (i % n == 0 && i >= offset) c += " " + x.capitalize else c += " " + x
      }
      c.trim
    }

    // Determine if a number is prime
    def isPrime(n:Integer) : Boolean = {
      if (n < 2) return false
      else for (i <- 2 until n) if (n % i == 0) return false
      true
    }

    // Calculate the golden ratio.
    // Given two numbers a and b with a > b > 0, the ratio is b / a.
    // Let c = a + b, then the ratio c / b is closer to the golden ratio.
    // Let d = b + c, then the ratio d / c is closer to the golden ratio.
    // Let e = c + d, then the ratio e / d is closer to the golden ratio.
    // If you continue this process, the result will trend towards the golden ratio.
    def goldenRatio(a:Double, b:Double) : Double = {
      val c = a+b
      val d = c/b

      if (d <= 1.61800 || d >= 1.61806) return Code.goldenRatio(b, c)
      d
    }

    // Give the nth Fibonacci number
    // Starting with 0, 1, 1, 2, ... a Fibonacci number is the sum of the previous two.
    def fibonacci(n:Integer) : Integer = {
      if (n < 2) return n
      def fibFrom(a: Int, b: Int): Stream[Int] = a #:: fibFrom(b, a + b)
      val fibs = fibFrom(1, 1).take(n)
      fibs.toList.last
    }

    // Give the square root of a number
    // Using a binary search algorithm, search for the square root of a given number.
    // Do not use the built-in square root function.
    def squareRoot(n:Double) : Double = {
      return sqr(n, 0)
    }

    def sqr(n:Double, guess:Double) : Double = {
      var g = 0.0;
      if (guess == 0) g = n/2 else g = guess

      val BMGuess = (g + (n / g)) / 2
      if (g == BMGuess) return BMGuess
      return Code.sqr(n, BMGuess);
    }
}
